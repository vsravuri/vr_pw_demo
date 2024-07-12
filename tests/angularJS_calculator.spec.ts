import { test, expect } from '@playwright/test';

const a='16';
const b='2';
const c='16 + 2 = 18';

test('AngularJS calculator', async({page}) =>{

    await page.goto('https://www.globalsqa.com/angularJs-protractor/SimpleCalculator/')
    await page.waitForTimeout(2000)
    await expect(page.locator('body > h1')).toHaveText('AngularJS calculator')

    //a =
    await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(2) > input').fill(a);
    await expect(page.locator('table > tbody > tr:nth-child(1) > td:nth-child(2) > input')).toHaveValue(a)

    //b
    await page.locator('table > tbody > tr:nth-child(2) > td:nth-child(2) > input').fill(b);
    await expect(page.locator('table > tbody > tr:nth-child(2) > td:nth-child(2) > input')).toHaveValue(b)

    //operation:
    await page.locator('table > tbody > tr:nth-child(3) > td:nth-child(2)').locator('select').selectOption('+')
    await expect(page.locator('table > tbody > tr:nth-child(3) > td:nth-child(2)').locator('select').locator('option:checked')).toHaveText('+')

    //Result
    await (expect(page.locator('b '))).toHaveText(c)
    await page.waitForTimeout(6000)

})