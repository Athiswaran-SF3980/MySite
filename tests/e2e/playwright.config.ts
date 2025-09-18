import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: process.env.SITE_URL || 'http://localhost:5000',
        headless: true
    },
    retries: 1,
    projects: [
    {
      name: 'chromium',
      use: {
          name: 'chromium',
          use: { browserName: 'chromium' },
      },
    }]

}); 