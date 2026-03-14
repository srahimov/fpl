import {test, expect} from '@playwright/test';
import {HomePage} from '../src/pages/HomePage';

test('Verify warning message for wrong account information', async ({page}) => {
    const homePage = new HomePage(page);
    await page.goto('https://www.fpl.com/');
    await homePage.selectRegion();
    await homePage.clickOutageLink();
    await expect(homePage.accountInput).toBeVisible();
    await expect(homePage.zipCodeInput).toBeVisible();
    await homePage.enterAccountNumber('1234567890');
    await homePage.enterZipCode('12345');
    await homePage.clickContinueButton();
    const warningMessage = await homePage.getWarningMessage();
    expect(warningMessage).toBe('We are unable to locate your account with the information you provided. Please check the information and try again.');
});

