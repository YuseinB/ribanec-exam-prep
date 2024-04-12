const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8080'); 
<<<<<<< HEAD
<<<<<<< HEAD
    const homeLink = await page.$('h1');
    const text = await homeLink.textContent();
    expect(text).toBe('My Shopping List');
=======
    const homeLink = await page.$('p[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('My Shopping List for Tomorrow');
>>>>>>> 9da651a (repo init)
=======
    const homeLink = await page.$('h1');
    const text = await homeLink.textContent();
    expect(text).toBe('My Shopping List');
>>>>>>> 57f1b43 (repo init)
  });
  