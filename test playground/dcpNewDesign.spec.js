const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:5501');
});

// run all tests using one worker, delete to run all tests simultaneously
test.describe.configure ({
    mode: 'serial',
})

test.describe ('new design', () => {

    test('story matches image', async ({ page }) => {

        // Arrays of all highlight story and image elements (Arrange)
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
        
        // Act 
        for (let i = 0; i < stories.length; i++) {
            const storySelector = stories[i];
            const heroImageSelector = heroImages[i];
        
            const storyElement = await page.locator(storySelector);
            const heroImageElement = await page.locator(heroImageSelector);
        
            // Hover over the story (Act)
            await storyElement.hover();
        
            await page.waitForTimeout(1500); //timeout for demo purpose
        
            // Check if the "active" class is added to the hero image (Assert)
            await expect(heroImageElement).toHaveClass('active');
        
          }
    });
    
    
    test('our project by geo', async ({ page }) => {
        // Array of elements by ID (Arrange)
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
          
          // Click the element (Act)
          await element.click();
      
          await page.waitForTimeout(1000); // timeout for demo purpose
      
          // Verify the "active" class (Assert)
          await expect(element).toHaveClass('filter-item active');
        }
      });
    
      test('able to search', async ({ page }) => {
        // get the searchbar (Arrange)
        const searchBar = await page.locator('#gsc-i-id1')
        
        // fill in content (Act)
        searchBar.fill('brooklyn projects')

        // wait 0.5 second before pressing enter 
        await page.waitForTimeout(500);

        // press enter on keyboard to see result 
        await page.keyboard.press('Enter')

        await page.waitForTimeout(5000); // timeout for demo purpose

        // locate search result (Arrange)
        const result = await page.locator('.gsc-expansionArea > div').first()

        // pass test if search result exists (Assert)
        await expect(result).toBeTruthy
      })
    
    

})



// await page.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.').toBeTruthy
// await page.getByRole('banner').getByRole('link', { name: 'About Us' }).click();
// await page.getByText('Home About Us Workplace has offline provide leverage generated that in bring cha').click();
// await page.locator('.header-logo').click();