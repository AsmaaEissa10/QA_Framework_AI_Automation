import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyProductsPageVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: 'All Products' })).toBeVisible();
  }

  async hoverOverProduct(index: number): Promise<void> {
    const product = this.page.locator('.product-image-wrapper').nth(index);
    await product.hover();
  }

  async viewProduct(index: number): Promise<void> {
    await this.hoverOverProduct(index);
    await this.page.locator('.product-image-wrapper').nth(index).getByRole('link', { name: 'View Product' }).click();
  }
}
