import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly addressInput: Locator;
  readonly findAddressButton: Locator;
  readonly storeName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressInput = page.getByTestId('map-dialog-input');
    this.findAddressButton =page.getByTestId('open-map-btn');
    this.storeName = page.locator("//div[contains(@class,'Card__Container')][.//h4[contains(.,'Automation')]]//button")
  }

  async goto() {
    await this.page.goto('https://staging.njs-qa1.lji.li/');
    await expect(this.page).toHaveURL(/.*lji\.li/);
    
  }

  async searchAddress(address: string) {
    await this.findAddressButton.click();
    await this.addressInput.fill(address);
    await this.page.keyboard.press('Enter');
  }

  async selectStore() {
    await this.storeName.click();

    
  }
}