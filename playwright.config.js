import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    baseURL: 'https://automationintesting.online/',
    screenshot: 'on',    // screenshot à chaque test
    video: 'on',         // vidéo à chaque test
    trace: 'on',         // trace viewer à chaque test
    headless: true,
  },

  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox'  } },
    { name: 'webkit',   use: { browserName: 'webkit'   } },
  ],

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
  ],
});