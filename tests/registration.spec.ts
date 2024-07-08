import { test, expect } from '@playwright/test';

test('Registration Form', async ({ page }) => {

    await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Welcome');


    await page.locator('[name="name"][type="text"]' ).first().click();





    // ------------------------- Old Code -----------------------------------

   /* //First Name:
    await page.locator('#register_form input[name="name"]').click();
    await page.locator('#register_form input[name="name"]').fill('TestFName');

    //Last Name:
    await page.locator('p').filter({ hasText: 'Last Name:' }).getByRole('textbox').click();
    await page.locator('p').filter({ hasText: 'Last Name:' }).getByRole('textbox').fill('TestLName');

    //Marital Status:
    await page.getByText('Single').click();
    //Hobby:
    await page.getByText('Cricket').click();
    //Country:
    await page.locator('fieldset').filter({ hasText: 'Country: India India' }).getByRole('combobox').selectOption('India');

    //Date of Birth:
    await page.locator('#register_form div').filter({ hasText: 'Month' }).getByRole('combobox').selectOption('1');
    await page.locator('#register_form div').filter({ hasText: 'Day' }).getByRole('combobox').selectOption('1');
    await page.locator('#register_form div').filter({ hasText: 'Year' }).getByRole('combobox').selectOption('2014');

    //Phone Number:
    await page.locator('#register_form input[name="phone"]').click();
    await page.locator('#register_form input[name="phone"]').fill('9876543210');

    //Username:
    await page.locator('#register_form input[name="username"]').click();
    await page.locator('#register_form input[name="username"]').fill('testuser');

    //E-mail:
    await page.locator('#register_form input[name="email"]').click();
    await page.locator('#register_form input[name="email"]').fill('testuser@test.com');

    //Your Profile Picture
    await page.locator('input[type="file"]').click();
    await page.locator('input[type="file"]').setInputFiles('testfiles/download.png');

    //About Yourself
    await page.locator('textarea').click();
    await page.locator('textarea').fill('Test About ');

    //Password:
    await page.locator('#register_form input[name="password"]').click();
    await page.locator('#register_form input[name="password"]').fill('Test@1234');

    //Confirm Password:
    await page.locator('input[name="c_password"]').click();
    await page.locator('input[name="c_password"]').fill('Test@1234');

    //Submit Button
    await page.getByRole('button', { name: 'submit' }).click();*/

});




test('Required Field Validation', async ({ page }) => {

    // await page.goto('https://www.way2automation.com/way2auto_jquery/registration.php#load_box');
    // // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle('Welcome');

    // //Submit Button
    // await page.getByRole('button', { name: 'submit' }).click();




    // ------------------------- Old Code -----------------------------------
    // await expect(page.locator('#register_form > fieldset:nth-child(1) > p:nth-child(1) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset.fieldset.padding-bottom.error_p > div > label.relative > label')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(6) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(7) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(8) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(11) > label.error_p')).toContainText('This field is required.');
    // await expect(page.locator(' #register_form > fieldset:nth-child(12) > label.error_p')).toContainText('This field is required.');

});

