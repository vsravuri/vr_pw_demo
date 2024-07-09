import { test, expect } from '@playwright/test';
import {type} from "node:os";

test('has title', async ({ page }) => {
    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Welcome');

    //First Name: - Text Field
    await page.locator('[name="name"][type="text"]').first().click();

    //Last Name:- Text Field



    //Marital Status: - Radio Button
    await page.locator('[class="radio_wrap"][name="m_status"][type="radio"]').getByLabel('Single').check();

    //Hobby: - CheckBox
    //await page.locator('input[type="checkbox"][name="hobby"]').getByText('Dance').check();

    //Country: - dropdown

    //Date of Birth: - 3 dropdowns Month-Day-Year



    //Phone Number: - Text Field
    //await page.locator('[name="phone"]][type="text"]').click();


    //Username: - Text Field
    //await page.locator('[name="username]"][type="text"]').click();

    //E-mail: - Text Field
    //await page.locator('[name="email]"][type="text"]').click();

    //Your Profile Picture - File Upload

    //About Yourself - Text Area
    //await page.locator('[textarea]"][row="5"]').click();

    //Password: - Text Field
   //await page.locator('[name="password]"][type="password"]').click();

    //Confirm Password: - Text Field
    //await page.locator('[name="c_password]"][type="password"]').click();

    //Submit Button - Button
    //await page.locator('[value="submit]"][type="submit"]').click();

});

test('Required Field Validation', async ({ page }) => {

    // await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
    // // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle('Welcome');

    // //Submit Button
    // await page.getByRole('button', { name: 'submit' }).click();

    // First Name >> Is Required


    // Hobby: >> Is Required


    // Phone Number: >> Is Required


    // Username: >> Is Required


    // E-mail: >> Is Required


    //  Password: >> Is Required


    // Confirm Password: >> Is Required


    // ------------------------- Old Code -----------------------------------
    // await expect(page.locator('#register_form > fieldset:nth-child(1) > p:nth-child(1) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset.fieldset.padding-bottom.error_p > div > label.relative > label')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(6) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(7) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(8) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(11) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(12) > label.error_p')).toContainText('This field is required.');

});
