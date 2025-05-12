import { Page, expect,Locator } from '@playwright/test';
import { customerData } from '../data/customerData';

export class CheckoutPage {
   readonly page: Page;
  readonly nameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly submitOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.phoneInput = page.locator('input[name="telephone"]');
    this.emailInput = page.locator('input[name="email"]');
    this.addressInput = page.locator('textarea[name="addressComments"]');
    this.submitOrderButton = page.locator('[data-testid="checkout-button"]');
  }

  async fillCustomerInfo() {
   await this.nameInput.fill(customerData.name);
    await this.phoneInput.fill(customerData.phone);
    await this.emailInput.fill(customerData.email);
    await this.addressInput.fill(customerData.address);
  }

  async validateUpsellItem() {
    const upsellImage = this.page.getByTestId('upsell-item-image');
    await expect(upsellImage).toBeVisible();
    
    
  }

  async selectPaymentMethod(){
    const paymentsOptions = await this.page.locator('[data-testid="payment-method-option"]');
    await paymentsOptions.last().waitFor();
    await paymentsOptions.last().click();
    
  }

  async submitOrder() {
    await this.submitOrderButton.waitFor();
    await this.submitOrderButton.click();

  }
}