import { defineConfig, devices } from '@playwright/test';

// Allure reporter config
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Allure + HTML reporters
  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

 projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      headless: false,
      launchOptions: {
        args: ['--start-maximized'],
      },
    },
  },
    
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});