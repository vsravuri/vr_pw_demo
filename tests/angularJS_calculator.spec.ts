import { test, expect } from '@playwright/test';

test('AngularJS calculator', async({page}) =>{

    await page.goto('https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/')
    await page.waitForTimeout(2000)
    await expect(page.locator('body > h1')).toHaveText('AngularJS calculator')

    



})