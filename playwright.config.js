import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout:  30000,
  retries:  1,

  use: {
    baseURL:   'https://automationintesting.online/',
    screenshot: 'on',             // capture à chaque test
    video:      'on-first-retry', // vidéo si le test échoue
    trace:      'on-first-retry', // trace Playwright Viewer
    headless:   true,
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