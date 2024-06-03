// Focusing Elements in Playwright
// Playwright's locator.focus() method allows you to programmatically focus on specific elements on a web page. This is particularly useful for simulating user interactions or testing functionalities that rely on focused elements.

// Here's a breakdown of the concept with notes and example code:

// Notes:

// locator.focus() targets an element using a Playwright locator. This locator can be obtained by various methods like page.getByLabel, page.getByText, page.querySelector, etc.
// Focusing an element is essential for interacting with it using methods like fill (for input fields) or keyboard interactions (e.g., press).
// This method is helpful for testing dynamic pages where elements might change their focus behavior.

import { test, expect } from "@playwright/test";

test("Focus and Interact with Elements", async ({ page }) => {
	// **1. Create a simple HTML page with form elements**

	await page.setContent(`
    <label for="username">Username:</label>
    <input type="text" id="username" />
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" />
    <br>
  `);

	// **2. Focus and Interact**

	// Focus the username field
	await page.getByLabel("Username").focus();

	// Type the username (assuming the locator points to the input field)
	await page.fill("#username", "test_user");

	// Focus the password field using another locator method (e.g., by ID)
	await page.locator("#password").focus();

	// Type the password (assuming the locator points to the input field)
	await page.fill("#password", "secret123");

	// You can add assertions here to verify form data or other actions
});
