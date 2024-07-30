import { expect, type Locator, type Page } from '@playwright/test';

export class inputData {
    //readonly page: Page;
page:Page

    constructor(page: Page){
    
        this.page = page;
      
        }
        

  async goto() {
    await this.page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/login')
  }

  async bankManagerLogin() {
    await this.page.getByRole('button', { name: 'Bank Manager Login' }).click()
    await this.page.waitForTimeout(2000)
  }

  async customersLink() {
    await this.page.getByRole('button', { name: 'Customers' }).click()
    await this.page.waitForTimeout(2000)
  }

  async searchForCustomer(name){
    await this.page.locator('[placeholder="Search Customer"]').click()
    await this.page.waitForTimeout(4000)
    await this.page.locator('[placeholder="Search Customer"]').pressSequentially(name,{ delay: 5 })
  }

}