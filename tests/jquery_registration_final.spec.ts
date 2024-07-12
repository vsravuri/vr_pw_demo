import { test, expect } from '@playwright/test';
import {type} from "node:os";

test('jQuery Registration Page >>> ', async ({ page }) => {
    
    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Welcome');

    // 01-First Name
    // await page.locator('input[type="text"][name="name"]').first().click();
    // await page.locator('input[type="text"][name="name"]').first().fill("mona");
    // await page.locator('[id="register_form"]').locator('[type="text"][name="name"]').click();
    // await page.locator('[id="register_form"]').locator('[type="text"][name="name"]').fill('mona');
    // await expect(page.locator('[id="register_form"]').locator('[type="text"][name="name"]')).toHaveValue('mona')
 
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox').click();
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox').fill("testuser");
    await expect(page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox')).toHaveValue("testuser")
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox').clear();
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox').fill("testuser01");
    await expect(page.locator('[id="register_form"]').locator('p').filter({hasText: 'First Name:'}).getByRole('textbox')).toHaveValue("testuser01")

    //02-Last Name
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'Last Name:'}).getByRole('textbox').click();
    await page.locator('[id="register_form"]').locator('p').filter({hasText: 'Last Name:'}).getByRole('textbox').pressSequentially("Lisha", {delay: 100});
    await expect(page.locator('[id="register_form"]').locator('p').filter({hasText: 'Last Name:'}).getByRole('textbox')).toHaveValue("Lisha")

    //03-Marital Status:
    //await page.getByLabel(' Married').click()
    //await page.locator('[id="register_form"]').locator('[class="radio_wrap"]').locator('[type="radio"][name="m_status"]').filter({hasText:' Married'}).click();
    await page.locator('[id="register_form"]').locator('[class="radio_wrap"] > label').filter({hasText: ' Married'}).locator('[name="m_status"]').click();
    await expect(page.locator('[id="register_form"]').locator('[class="radio_wrap"] > label').filter({hasText: ' Married'}).locator('[name="m_status"]')).toBeChecked();

    //04-Hobby:
    await page.locator('[id="register_form"]').locator('[class="radio_wrap"] > label').filter({hasText: ' Cricket'}).locator('[name="hobby"]').click();
    await expect(page.locator('[id="register_form"]').locator('[class="radio_wrap"] > label').filter({hasText: ' Cricket'}).locator('[name="hobby"]')).toBeChecked()

    //05-Dropdown - Country:
    //await page.locator('[id="register_form"]').locator('[value="India"]').filter({hasText:'India'}).selectOption('India')
    await page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Country:' }).locator('select').selectOption('India')
    await expect(page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Country:' }).locator('select option:checked')).toHaveText('India')

    //06-07-08-Date of Birth: Month

    await expect(page.locator('[id="register_form"]').locator('fieldset').filter({ hasText:'Date of Birth:' }).locator('select').first().locator('option')).toHaveText(['Month','31'])

    //await expect(page.locator('[id="register_form"]').locator('fieldset').filter({ hasText:'Date of Birth:' }).locator('select').first().locator('option')).toHaveText(['Month','1']);
    //await expect(page.locator('[id="register_form"]').locator('fieldset').filter({ hasText: 'Date of Birth:' }).locator('select').first().locator('option')).toContainText(['Month']);
    
    //await expect(page.locator('[id="register_form"]').locator('[class="radio_wrap"] > label').filter({hasText: ' Cricket'})).toHaveText('Crocket')


    await page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').first().selectOption('1')
    await expect(page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').first().locator('option:checked')).toHaveText('123')

    await page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').nth(1).selectOption('1')
    await expect(page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').nth(1).locator('option:checked')).toHaveText('1234')

    await page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').last().selectOption('2014')
    await expect(page.locator('[id="register_form"]').locator('fieldset').filter({hasText:'Date of Birth:' }).locator('select').last().locator('option:checked')).toHaveText('123')

    //09-Phone Number:
    await page.locator('[id="register_form"]').locator('[type="text"][name="phone"]').click();
    await page.locator('[id="register_form"]').locator('[type="text"][name="phone"]').fill('1234567890');
    await expect(page.locator('[id="register_form"]').locator('[type="text"][name="phone"]')).toHaveValue('1234567890')

    //10-Username:
    await page.locator('[id="register_form"]').locator('[type="text"][name="username"]').click();
    await page.locator('[id="register_form"]').locator('[type="text"][name="username"]').fill('testuser');
    await expect(page.locator('[id="register_form"]').locator('[type="text"][name="username"]')).toHaveValue('testuser')

    //11-E-mail:
    await page.locator('[id="register_form"]').locator('[type="text"][name="email"]').click();
    await page.locator('[id="register_form"]').locator('[type="text"][name="email"]').fill('testuser@m.com');
    await expect(page.locator('[id="register_form"]').locator('[type="text"][name="email"]')).toHaveValue('testuser@m.com')

    //12-Your Profile Picture
    await page.locator('[id="register_form"]').locator('[type="file"]').setInputFiles('testfiles/download.png');
    await expect(page.locator('[id="register_form"]').locator('[type="file"]')).toHaveValue('download.png')

    //13-About Yourself
    await page.locator('[id="register_form"]').locator('[type="text"][name="email"]').click();
    await page.locator('[id="register_form"]').locator('[type="text"][name="email"]').fill('testuser@m.com');
    await expect(page.locator('[id="register_form"]').locator('[type="text"][name="email"]')).toHaveValue('testuser@m.com')

    //14-Password:
    await page.locator('[id="register_form"]').locator('[type="password"][name="password"]').click();
    await page.locator('[id="register_form"]').locator('[type="password"][name="password"]').fill('testPwd1');
    await expect(page.locator('[id="register_form"]').locator('[type="password"][name="password"]')).toHaveValue('testPwd1')

    //15-Confirm Password::
    await page.locator('[id="register_form"]').locator('[type="password"][name="c_password"]').click();
    await page.locator('[id="register_form"]').locator('[type="password"][name="c_password"]').fill('testPwd1');
    await expect(page.locator('[id="register_form"]').locator('[type="password"][name="c_password"]')).toHaveValue('testPwd1')

    //16-Submit
    await page.locator('[id="register_form"]').locator('[type="submit"][value="submit"]').click();
    await page.waitForTimeout(6000)

})
