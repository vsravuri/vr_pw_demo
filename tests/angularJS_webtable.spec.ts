import { test, expect } from '@playwright/test';

test('AngularJS WebTable', async({page}) =>{

    await page.goto('https://www.globalsqa.com/angularJs-protractor/WebTable/')
    await page.waitForTimeout(2000)

    //search for FirstName
    await page.locator('input[st-search="firstName"]').pressSequentially('Robert',{ delay: 5 })
    await expect(page.locator('input[st-search="firstName"]')).toHaveValue('Robert')
    await page.waitForTimeout(3000)

    //Count the Number of Records found with FirstName 
    //await expect(page.locator('table > tbody > tr')).toHaveCount(9)
    //await page.waitForTimeout(3000)

    //Print the record of the First Row

    //Count the Number of Columns in the 1st Row of the Table 
    //await expect(page.locator('table > tbody > tr:nth-child(1) > td')).toHaveCount(9)
    //await page.waitForTimeout(3000)

    const columnCount = await page.locator('table > tbody > tr:nth-child(1) > td').count()

    for (var i=1;i<columnCount+1;i++){

        const cv = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(/i/)').innerText();
        console.log('Column Value' + cv);
    }
  // const FN = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(1)').innerText();
    // const LN = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(2)').innerText();
    // const age = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(3)').innerText();
    // const eMail = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(4)').innerText();
    // const balance = await page.locator('table > tbody > tr:nth-child(1) > td:nth-child(5)').innerText();

    // console.log ('------------------------------')
    // console.log('FirstName >> ' + FN);
    // console.log('LastName >> ' + LN);
    // console.log('Age >> ' + age);
    // console.log('E-Mail >> ' + eMail);
    // console.log('Balance >> ' + balance);
    // console.log ('------------------------------')
  

    await page.waitForTimeout(3000)

})