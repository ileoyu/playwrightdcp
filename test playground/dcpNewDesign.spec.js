const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5501');
});

test.describe ('new design', () => {

    test.only('story matches image', async ({ page }) => {

        const stories = [
            '#highlight-story-1',
            '#highlight-story-2',
            '#highlight-story-3',
        ];
        const heroImages = [
            '#hero-1',
            '#hero-2',
            '#hero-3',
        ];
        
        for (let i = 0; i < stories.length; i++) {
            const storySelector = stories[i];
            const heroImageSelector = heroImages[i];
        
            const storyElement = await page.locator(storySelector);
            const heroImageElement = await page.locator(heroImageSelector);
        
            // Hover over the story 
            await storyElement.hover();
        
            // timeout for demo purpose
            await page.waitForTimeout(1500);
        
            // Check if the "active" class is added to the hero image
            await expect(heroImageElement).toHaveClass('active');
        
          }
    });
    
    
    test('our project by geo', async ({ page }) => {
        // Array of elements by ID 
        const elements = [
          '#bronx-projects',
          '#brooklyn-projects',
          '#manhattan-projects',
          '#queens-projects',
          '#statenisland-projects',
          '#citywide-projects'
        ];
      
        for (const elementSelector of elements) {
          const element = await page.locator(elementSelector);
          
          // Click the element
          await element.click();
      
          // Wait for a moment to allow for any potential class changes to take effect
          await page.waitForTimeout(1000); // timeout for demo purpose
      
          // Verify the "active" class
          await expect(element).toHaveClass('filter-item active');
        }
      });
     

})



// await page.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').toBeTruthy
// await page.getByRole('banner').getByRole('link', { name: 'About Us' }).click();
// await page.getByText('Home About Us Workplace has offline provide leverage generated that in bring cha').click();
// await page.locator('.header-logo').click();