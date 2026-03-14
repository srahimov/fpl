import {test, expect} from '@playwright/test'
import { ServicesPage } from '../src/pages/ServicesPage'
import { AccountInfoPage } from '../src/pages/AccountInfoPage'

test('Verify new account creation flow', async ({page}) => {
    
    const servicesPage = new ServicesPage(page);
    await page.goto('https://www.fpl.com/');
    await servicesPage.clickServicesLink();
    await servicesPage.clickStartStopMoveLink();
    await servicesPage.selectRegion();
    await servicesPage.clickNewCustomerButton();
    await servicesPage.selectAccountType('Individual');
    await servicesPage.clickNextButton();

    const infoPage = new AccountInfoPage(page);
    await infoPage.checkAccountFields();
    //screenshot examples
    await infoPage.firstNameInput.screenshot({  path: 'screenshots/webelement.png'});
    await page.screenshot({  path: 'screenshots/page.png'});
    await page.screenshot({  path: 'screenshots/fullpage.png',  fullPage: true });
    await page.close();

    

})