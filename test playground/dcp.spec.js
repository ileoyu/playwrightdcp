// const { test, expect } = require('@playwright/test')


// test.beforeEach(async ({ page }) => {
//     await page.goto('https://www.nyc.gov/site/planning/about/department.page')
//     await page.pause();
//     await expect(page).toHaveTitle('Department - DCP')
// });


// test.describe('level two contents are clickable', () => {
//     test('City planning history is clickable', async({page}) => {
//         await page.getByRole('link', { name: 'City Planning History' }).click();
//         const cpHistoryHeader = await page.getByText('City Planning History')
//         await expect(cpHistoryHeader !== undefined).toBeTruthy
//         await page.getByRole('button', { name: 'City Charter' }).click();
//         await page.getByText('1936 – Established City Planning Commission').toBeTruthy
//         //await page.pause();
//     }) 
// })
