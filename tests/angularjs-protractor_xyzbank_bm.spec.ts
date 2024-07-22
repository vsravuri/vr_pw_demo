import { test, expect } from '@playwright/test';

test('AngularJS WebTable', async({page}) =>{

    await page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/login')
    await page.waitForTimeout(2000)
    //await expect(page.locator('head > title')).toHaveText('AngularJS calculator') 
    await expect(page).toHaveTitle('Protractor practice website - Banking App'); - //For page title
    
    await page.getByRole('button', { name: 'Bank Manager Login' }).click()
    await page.waitForTimeout(2000)

    await page.getByRole('button', { name: 'Customers' }).click()
    await page.waitForTimeout(2000)

    //Search for Customer
   await page.locator('[placeholder="Search Customer"]').click()
   await page.waitForTimeout(4000)
   await page.locator('[placeholder="Search Customer"]').pressSequentially('Ron',{ delay: 5 })
   await expect(page.locator('[placeholder="Search Customer"]')).toHaveValue('Ron')


   const rowElement = page.locator('tbody').getByRole('row').nth(0);
   const rowCount = await page.locator('tbody').getByRole('row').count();
   const columnCount = await rowElement.getByRole('cell').count();

   console.log ('------------ Total Number of rows ------------------ >> ' +rowCount)

   for (var m=1;m<rowCount+1;m++) {
   console.log ('---------------------------')
    for (let i = 0; i < columnCount; i++){
      const cv = await rowElement.getByRole('cell').nth(i).innerText();
      console.log('Column Value >> '+i +' - for Row - '+ m + ' >> '+cv);
    }
  }

  //Delete
  //Add
  //Open Account 

})