import { expect, request } from '@playwright/test';

export async function validateOrderViaAPI(orderNumber: string) {
  const today = new Date();
  const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  const reqContext = await request.newContext();

  const maxRetries = 5;
  const waitTimeMs = 3000;

  let order: any = null;

  for (let i = 0; i < maxRetries; i++) {
    const response = await reqContext.post('https://mng-qa1.lji.li/api/getReportNew', {
      data: {
        accessKey: '123',
        chainId: '8315bf51-dd7c-364d-f63e-fbdcfca69ab0',
        endDate: date,
        isChain: true,
        reportFor: '8315bf51-dd7c-364d-f63e-fbdcfca69ab0',
        startDate: date,
        storeId: '48499619-0afe-3382-da0d-408b6be8c835',
        successOnly: true
      }
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();

    order = body?.orders?.find((o: any) => o.return_order_number === parseInt(orderNumber.trim()));

    if (order) break;

    console.log(`Intento ${i + 1}: order not found. waiting ${waitTimeMs}ms...`);
    await new Promise(res => setTimeout(res, waitTimeMs));
  }

  expect(order).toBeTruthy();
  console.log(`Order number: ${order.return_order_number}`);
}