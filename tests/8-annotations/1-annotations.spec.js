// Annotations Introduction
// Playwright supports tags and annotations that are displayed in the test report.

// You can add your own tags and annotations at any moment, but Playwright comes with a few built-in ones:

// test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
// test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
// test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
// test.slow() marks the test as slow and triples the test timeout.
// Annotations can be added to a single test or a group of tests.

// Built-in annotations can be conditional, in which case they apply when the condition is truthy, and may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations.

import { test, expect } from "@playwright/test";

// Built-in Annotations

// Skipping a test (uncomment to skip)
// test.skip("Skip this test (uncomment to activate)", async ({ page }) => {
//   // Test content here
// });

// Marking a test as failing (uncomment to force failure)
// test.fail("This test should fail (uncomment to activate)", async ({ page }) => {
//   // Test content here (should cause a failure)
// });

// Marking a test as failing (won't run, use for slow or crashing tests)
// test.fixme("This test needs fixing (uncomment to activate)", async ({ page }) => {
//   // Test content here (won't be executed)
// });

// Marking a test as slow (triples timeout)
test.slow("This test is slow (takes longer to run)", async ({ page }) => {
	// Simulate a slow operation (e.g., network throttling)
	await page.waitForTimeout(5000); // Wait for 5 seconds
	console.log("Slow test completed");
});

// Focusing a Test

// Uncomment the following line to run only this test
test.only("Focus this test", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	const title = await page.title();
	expect(title).toBe(
		"Fast and reliable end-to-end testing for modern web apps | Playwright"
	);
	console.log("Focused test passed!");
});

// Regular Test (won't run if another test is focused)
test("Regular test", async ({ page }) => {
	await page.goto("https://example.com/");
	console.log("Regular test executed");
});
