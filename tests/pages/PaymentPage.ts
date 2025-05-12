import { Page, Locator } from '@playwright/test';
import { customerData } from '../data/customerData';

export class PaymentPage {
  readonly page: Page;
  readonly creditCardOption: Locator;
  readonly cardNumberInput: Locator;
  readonly cardHolderInput: Locator;
  readonly expDateInput: Locator;
  readonly cvvInput: Locator;
  readonly continueButton: Locator;
  readonly rutInput: Locator;
  readonly payButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.creditCardOption = page.getByRole('button', { name: 'Tarjeta de crédito' });
    
    this.cardNumberInput = page.frameLocator('iframe[name="cardNumber"]') .getByRole('textbox', { name: '1234 1234 1234' });
    this.cardHolderInput = page.getByRole('textbox', { name: 'Nombre del titular' });
    this.expDateInput = page.frameLocator('iframe[name="expirationDate"]').getByRole('textbox', { name: 'MM/AA' });
    this.cvvInput = page.frameLocator('iframe[name="securityCode"]').getByRole('textbox', { name: 'Ej.:' });
    this.continueButton = page.getByRole('button', { name: 'Continuar' });
    this.rutInput = page.getByRole('textbox', { name: 'Número' });
    this.payButton = page.getByRole('button', { name: 'Pagar' });
   
  }

  async payWithTestCard() {
    await this.creditCardOption.click();
    await this.cardNumberInput.fill(customerData.card.number);
    await this.cardHolderInput.fill(customerData.card.holder);
    await this.expDateInput.fill(customerData.card.expDate);
    await this.cvvInput.fill(customerData.card.cvv);
    await this.continueButton.click();
    await this.rutInput.fill(customerData.rut);
    await this.continueButton.click();
    await this.payButton.click();
    await this.page.pause();
    
  }
}