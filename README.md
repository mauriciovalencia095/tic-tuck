# Playwright Tictuk Test Automation

This project is an automated end-to-end testing framework built using [Playwright](https://playwright.dev/) with the Page Object Model (POM) design pattern. It simulates a complete user journey: searching a location, selecting a store, adding items, completing a payment via MercadoPago, and validating the resulting order via API.

> ✅ **Latest successful order number (from last run): `4377535`**

---

## 📦 Project Structure

```
├── tests/                # Test files and POM classes
│   ├── pages/            # Page Object Model classes
│   ├── utils/            # API utilities
│   ├── data/             # Test data (e.g., customer info)
│   └── order.spec.ts     # Main test scenario
├── playwright.config.ts  # Global Playwright config
├── .gitignore
└── README.md             # Project documentation
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mauriciovalencia095/tic-tuck.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npx playwright test
```

### 4. Generate and Open Reports

#### ▶ HTML Report
```bash
npx playwright show-report
```

#### ▶ Allure Report

Make sure Allure is installed globally:

```bash
npm install -g allure-commandline --save-dev
```

Then:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## 🧪 Test Case Summary

### Scenario: Full User Checkout Flow

1. Go to the home page
2. Search for an address
3. Select the store named `Automation`
4. Add menu items to cart
5. Fill in customer details
6. Validate upsell items
7. Submit the order
8. Pay using a test credit card (via MercadoPago)
9. Validate order confirmation screen
10. Extract order number from UI
11. Validate the order via API

---

## 📸 Reporting Features

- Screenshots are captured automatically **only on failure**
- Videos are retained **only on failure**
- Traces are collected **on first retry**
- Reports are generated in **both HTML and Allure formats**

---

## 🏗️ Design & Architecture

- **Page Object Model (POM)**: Improves maintainability and reusability by abstracting UI actions into dedicated classes.
- **Custom Waiting Strategies**: Avoids hardcoded timeouts using robust mechanisms like `expect(locator).toHaveText()` with retry logic.
- **API Validation**: After UI checkout, the order is verified by querying a real-time API using `playwright/test`’s request context.
- **Environment Isolation**: The tests are designed to run in a sandbox environment using test credentials and mocked payment data.

---

## 📘 Tech Stack

- [Playwright](https://playwright.dev/) for browser automation
- TypeScript for type safety and maintainability
- [Allure Reporter](https://docs.qameta.io/allure/) for detailed reporting
- Node.js (>=22.x)

---

## 🧹 .gitignore Highlights

```gitignore
# Test artifacts
playwright-report/
test-results/
allure-results/
allure-report/
```

---

## 📜 Commit Strategy

The commit history reflects a structured development approach:
- Initial setup and configuration
- POM creation for each screen
- Payment and Result page flows
- API validation integration
- Reporters and failure strategies
- Final refinements and full flow validation

---

## ✅ Final Notes

This framework is fully modular and scalable for future additions such as:
- Multi-browser support (Firefox, WebKit)
- Mobile view testing
- CI/CD pipeline integration