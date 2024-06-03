// Playwright Conditional Test Skipping Example

// This comment explains the concept of conditionally skipping tests:
// In Playwright, you can skip tests based on specific conditions. This allows
// you to tailor your test execution based on factors like browser name,
// environment variables, or test fixture values.

import { test } from "@playwright/test";
test("Conditional Skip Test", async ({ page, browserName }) => {
	// This test will only run if the browser is not Firefox.
	test.skip(
		browserName === "firefox",
		"Skipping test for Firefox (still under development)"
	);
	await page.goto("https://playwright.dev/");
	console.log("Test executed (not Firefox)");
});
