import { Page, expect } from '@playwright/test';

export class AccountCreatedPage {
  constructor(private page: Page) {}

  async verifyAccountCreated(): Promise<void> {
    await expect(this.page.getByText('Account Created!')).toBeVisible();
  }

  async clickContinue(): Promise<void> {
    await this.page.getByRole('link', { name: 'Continue' }).click();
  }
}
