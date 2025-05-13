import { expect, Locator, Page } from '@playwright/test';

export class ResultPage {
  readonly page: Page;
  readonly confirmationTitle: Locator;
  readonly orderNumber: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmationTitle = page.getByTestId('order-confirmation-title');
    this.orderNumber = page.getByTestId('your-order-number');
  }

 async verifyConfirmationMessage(): Promise<void> {
   await expect(this.confirmationTitle).toHaveText("You're all set", {
    timeout: 60000
    });
  }

  async extractOrderNumber(): Promise<string> {
    const rawText = await this.orderNumber.textContent();
    if (!rawText) throw new Error('Could not find the order');

    const match = rawText.match(/\d+/); 
    if (!match) throw new Error(`Could not find the number ${rawText}`);

    return match[0]; 
  }
}