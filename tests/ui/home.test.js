const { test, expect } = require('@playwright/test');

test('Check home page', async ({ page }) => {
    await page.goto('http://localhost:8080/');
<<<<<<< HEAD
<<<<<<< HEAD
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('My Shopping List');  
=======
    const heading = await page.$('h2');
    const text = await heading.textContent();
    expect(text).toContain('My shopping list');  
>>>>>>> 9da651a (repo init)
=======
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('My Shopping List');  
>>>>>>> 57f1b43 (repo init)
  });
  