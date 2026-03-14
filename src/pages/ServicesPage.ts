import {Page, Locator} from '@playwright/test'

export class ServicesPage {

    readonly page: Page
    readonly servicesLink: Locator
    readonly startStopMoveLink: Locator
    readonly regionSelect: Locator
    readonly regionContinueButton: Locator
    readonly newCustomerButton: Locator
    readonly accountTypeSelect: Locator
    readonly individualAccountContinueButton: Locator
    readonly individualAccountNextButton: Locator

    constructor (page: Page) {

        this.page = page
        this.servicesLink = page.getByRole('link', { name: 'Services' });
        this.startStopMoveLink = page.getByRole('link', { name: 'Start, Stop, Move' });
        this.regionSelect = page.locator('a[aria-label="northwest"]');
        this.regionContinueButton = page.getByRole('button', { name: 'Continue' });
        this.newCustomerButton = page.getByText('New Customer');
        this.accountTypeSelect = page.getByText('Individual');
        this.individualAccountContinueButton = page.getByRole('button', { name: 'Continue' });
        this.individualAccountNextButton = page.locator('span.block').filter({ hasText: 'Next' });

    }

    async clickServicesLink() {
        await this.servicesLink.click();
    }

    async clickStartStopMoveLink() {
        await this.startStopMoveLink.click();
    }

    async selectRegion() {
        await this.regionSelect.click();
        await this.regionContinueButton.click();
    }

    async clickNewCustomerButton() {
        await this.newCustomerButton.click();
    }

    async selectAccountType(accountType: string) {
        await this.accountTypeSelect.click();
        await this.individualAccountContinueButton.click();
    }

    async clickNextButton() {
        await this.individualAccountNextButton.click();
    }




}