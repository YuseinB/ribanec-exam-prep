const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    await page.goto('http://localhost:8080');  
    const footer = await page.$('footer');
    const text = await footer.textContent();
<<<<<<< HEAD
<<<<<<< HEAD
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
=======
    expect(text).toContain('© 2024 - Software Engineering and DеvOps еxam prеparation');
>>>>>>> 9da651a (repo init)
=======
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
>>>>>>> 57f1b43 (repo init)
  });
  