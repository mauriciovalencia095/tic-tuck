import { Page,Locator, expect } from '@playwright/test';

export class MenuPage {
  readonly page: Page;
  readonly innerElement: Locator;
  readonly complexElement: Locator;
  readonly radioButtonOption1: Locator;
  readonly addToCart:Locator;
  readonly checkoutBtn:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.innerElement =page.locator('#menu-page-item-required-inner-section-cart-icon');
    this.complexElement =page.locator('#menu-page-item-au-menu-items-complex-item-2-cart-icon');
    this.radioButtonOption1 =page.locator("//span[contains(.,'SingleSelectOption1')]/parent::div//input");
    this.addToCart =page.locator('[data-testid="add-to-cart-btn"]');
    this.checkoutBtn =page.locator('[data-testid="checkout-button"]');

  }

  async addMenuItems() {
    const menuItems = await this.page.locator('[data-testid="menu-item-cart-button"]');
    await menuItems.first().waitFor();
    await menuItems.first().click();

    await menuItems.last().waitFor();
    await menuItems.last().click();

    await this.innerElement.waitFor();
    await  this.innerElement.click();
    await this.radioButtonOption1.click();
    await this.addToCart.click();

    await this.complexElement.waitFor();
    await  this.complexElement.click();
    await this.radioButtonOption1.click();
    await this.addToCart.click();


   await this.checkoutBtn.click();
  
  }
}