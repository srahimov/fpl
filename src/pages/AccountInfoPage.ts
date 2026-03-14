import {Page, Locator, expect} from '@playwright/test'

export class AccountInfoPage {

    readonly page: Page
    readonly firstNameInput: Locator
    readonly middleNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly confirmEmailInput: Locator
    readonly phonePrimaryInput: Locator
    readonly phoneSecondaryInput: Locator
    readonly accInfoNextButton: Locator


    constructor(page: Page) {
        this.page = page
        this.firstNameInput = page.locator('input[aria-label="*First Name"]');
        this.middleNameInput = page.locator('input[aria-label="Middle Name"]');
        this.lastNameInput = page.locator('input[aria-label="*Last Name"]');
        this.emailInput = page.locator('input[aria-label="*Email Address"]');
        this.confirmEmailInput = page.locator('input[aria-label="*Confirm Email Address"]');
        this.phonePrimaryInput = page.locator('input[aria-label="*Primary Phone Number"]');
        this.phoneSecondaryInput = page.locator('input[aria-label="Secondary Phone Number"]');
        this.accInfoNextButton = page.locator('span.block').filter({ hasText: 'Next' });   
    }

    async checkAccountFields() {
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.middleNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.confirmEmailInput).toBeVisible();
        await expect(this.phonePrimaryInput).toBeVisible();
        await expect(this.phoneSecondaryInput).toBeVisible();
        await expect(this.accInfoNextButton).toBeVisible();
    }



}