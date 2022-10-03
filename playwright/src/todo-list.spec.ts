const CURRENT_LIST_TAB =
  'body > app-root > main > tabset > ul > li:nth-child(2)';
import { test, expect } from '@playwright/test';

test('A test for testing the todo list', async ({ page }) => {
  await page.goto('http://localhost:4200');
  await page.waitForSelector(CURRENT_LIST_TAB);
  await page.click(CURRENT_LIST_TAB);
  await page.waitForTimeout(60000 * 3);
});
