import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentPage } from './pages/PaymentPage';
import {ResultPage } from './pages/ResultPage';

test.describe('Test flow', () => {
  test('Step 1: Got to web site and select store called: "Automation"', async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new HomePage(page);
    const menuPage = new MenuPage(page);
    const checkoutPage = new CheckoutPage (page);
    const paymentPage = new PaymentPage(page);
    const resultPage = new ResultPage(page);

    await homePage.goto();
    await homePage.searchAddress('700 Wilshire Blvd, Santa Monica, CA 90401, USA');
    await homePage.selectStore();
    await menuPage.addMenuItems();
    await checkoutPage.fillCustomerInfo();
    await checkoutPage.validateUpsellItem();
    await checkoutPage.selectPaymentMethod();
    await checkoutPage.submitOrder();
    await paymentPage.payWithTestCard();
    await resultPage.verifyConfirmationMessage();
    
  });
});