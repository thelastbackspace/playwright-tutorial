// Playwright Test Focusing Example

// In Playwright, you can focus specific tests to run only those tests during
// your test execution. This can be helpful when debugging a particular test
// or running a specific set of tests for a particular feature.

import { test } from "@playwright/test";
// Regular Test (Not Focused)
test("Regular Test (Not Focused)", async ({ page }) => {
	// This test will only run if no other test is focused.
	await page.goto("https://playwright.dev/");
	console.log("Regular Test Executed");
});

// Focused Test (Uncomment the line below to run only this test)
// test.only("Focus this test", async ({ page }) => {
// 	// This test will run ONLY if the line above is uncommented.
// 	await page.goto("https://example.com/");
// 	console.log("Focused Test Executed");
// });
