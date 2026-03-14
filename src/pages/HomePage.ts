import {Page, Locator} from '@playwright/test'

export class HomePage {

    readonly page: Page
    readonly regionSelect: Locator
    readonly regionContinueButton: Locator
    readonly outageLink: Locator
    readonly accountInput: Locator
    readonly zipCodeInput: Locator
    readonly continueButton: Locator
    readonly warningMessage: Locator

    constructor(page: Page) {
        this.page = page
        //Element locators
        this.regionSelect = page.locator('#defaultFplMap label');
        this.regionContinueButton = page.getByRole('button', { name: 'Continue' });
        this.outageLink = page.getByText('Report an Outage');
        this.accountInput = page.getByPlaceholder('Account Number (10 Digits)');
        this.zipCodeInput = page.locator('input[aria-describedby=core_view_form_ZipCodeTextBox_1_error]');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.warningMessage = page.getByText('We are unable to locate your account with the information you provided. Please check the information and try again.');

    }

    async selectRegion(region?: string) {
        await this.regionSelect.click();
        await this.regionContinueButton.click();
    }

    async clickOutageLink() {
        await this.page.waitForLoadState('networkidle');
        await this.outageLink.nth(2).click()
    }

    async enterAccountNumber(accountNumber: string) {
        await this.accountInput.fill(accountNumber)
    }

    async enterZipCode(zipCode: string) {
        await this.zipCodeInput.fill(zipCode)
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async getWarningMessage() {
        return await this.warningMessage.textContent()
    }


}