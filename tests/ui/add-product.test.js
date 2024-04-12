const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
<<<<<<< HEAD
<<<<<<< HEAD
    await page.goto('http://localhost:8080/Add-Product');
=======
    await page.goto('http://localhost:8080/add-to-shopping-list');
>>>>>>> 9da651a (repo init)
=======
    await page.goto('http://localhost:8080/Add-Product');
>>>>>>> 57f1b43 (repo init)
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  