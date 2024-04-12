const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('http://localhost:8080/shopping-list');
<<<<<<< HEAD
<<<<<<< HEAD
    const list = await page.$('ul');
=======
    const list = await page.$('dl');
>>>>>>> 9da651a (repo init)
=======
    const list = await page.$('ul');
>>>>>>> 57f1b43 (repo init)
    expect(list).toBeTruthy();
  });
  