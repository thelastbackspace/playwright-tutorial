// Playwright Test - fixme Annotation in beforeEach Hook

// Playwright allows you to conditionally skip a `beforeEach` hook using the
// `test.fixme` annotation. This is useful when the setup logic in `beforeEach`
// is not yet functional for certain conditions (e.g., mobile devices).

import { test, expect } from "@playwright/test";

// beforeEach hook with fixme annotation (conditionally skips for mobile)
test.beforeEach(async ({ page, isMobile }) => {
	// Skip setup steps for mobile due to known issue
	test.fixme(isMobile, "Settings page does not work in mobile yet");

	// Regular setup logic for non-mobile devices
	await page.goto("https://google.com");
});

// Test that leverages the setup from beforeEach
test("login", async ({ page }) => {
	// Click on "login" (assuming setup from beforeEach has loaded the correct page)
	await page.getByText("Sign in").click();
	// ... (further test steps for editing profile)
});
