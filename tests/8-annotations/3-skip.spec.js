// Playwright Test Skipping Example

// In Playwright, you can skip certain tests to prevent them from running during
// your test execution. This can be useful for tests that are under development,
// not applicable in a specific environment, or temporarily failing.

import { test } from "@playwright/test";
test("Regular Test (Not Skipped)", async ({ page }) => {
	// This test will run unless explicitly skipped.
	await page.goto("https://playwright.dev/");
	console.log("Regular Test Executed");
});

// Skipped Test
test.skip("Skip this test", async ({ page }) => {
	// This test will NOT be run because it's skipped.
	await page.goto("https://example.com/"); // This line won't be executed
	console.log("This message won't be printed (test skipped)"); // Not printed
});
