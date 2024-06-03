import { test, expect } from "@playwright/test";

test("Checking a button is not disabled", async ({ page }) => {
	// Create a simple HTML page with a button
	await page.setContent(`
    <button id="myButton">Click me!</button>
  `);

	// Get a reference to the button
	const button = await page.locator("#myButton");

	// **Assertion (using not.toBeDisabled):**
	// Verify the button is NOT disabled
	await expect(button).not.toBeDisabled();
});
