const { test, expect } = require('@playwright/test');

test('Check about page', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('h1');
  const text = await heading.textContent();
<<<<<<< HEAD
<<<<<<< HEAD
  expect(text).toBe('About');
=======
  expect(text).toBe('About my shopping list');
>>>>>>> 9da651a (repo init)
=======
  expect(text).toBe('About');
>>>>>>> 57f1b43 (repo init)
});

test('Check about page test', async ({ page }) => {
  await page.goto('http://localhost:8080/about');
  const heading = await page.$('p');
  const text = await heading.textContent();
<<<<<<< HEAD
<<<<<<< HEAD
  expect(text).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
=======
  expect(text).toBe('This is my shopping list');
>>>>>>> 9da651a (repo init)
=======
  expect(text).toBe('This is the Regular exam for Software Engineering and DevOps course @ SoftUni');
>>>>>>> 57f1b43 (repo init)
});
