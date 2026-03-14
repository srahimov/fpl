import {test, expect} from '@playwright/test'
import { AccountInfoPage } from '../src/pages/AccountInfoPage'

test('Verify account information fields visibility', async ({page}) => {
    
    const infoPage = new AccountInfoPage(page);
    await page.goto('https://www.fpl.com/fpl-app/my-account/connect/account-information');
    await infoPage.checkAccountFields();

})