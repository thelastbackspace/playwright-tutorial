// Playwright Test Tagging Example (Mocked Pages)

// In Playwright, you can tag your tests with labels to categorize them.
// This allows for filtering tests in the test report or running only tests
// with specific tags. Tags can be used for various purposes like:
// - Identifying fast or slow tests (@fast, @slow)
// - Grouping tests related to a specific feature (@feature)
// - Marking tests for visual regression testing (@vrt)

import { test, expect } from "@playwright/test";

// Test with Tag Using Additional Details Object
test(
	"Test Login Page (Fast)",
	{
		tag: "@fast", // Tag this test as fast
	},
	async ({ page }) => {
		// Create mocked login page content
		await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Login Page (Mock)</title>
    </head>
    <body>
      <h1>Login</h1>
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter Username"><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter Password"><br>
        <button type="submit" id="login-button">Login</button>
      </form>
    </body>
    </html>
  `);

		// Login page test logic (assumed to be fast)
		// ... (further test steps for login functionality)
	}
);

// Test with Tag in Title
test("Test Full Report @slow", async ({ page }) => {
	// Create mocked report page content
	await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Report Page (Mock)</title>
    </head>
    <body>
      <h1>Report</h1>
      <p>This is a mocked report page content.</p>
    </body>
    </html>
  `);

	// Simulate a slower test (e.g., generating a full report)
	await page.waitForTimeout(5000); // Wait for 5 seconds
	console.log("This test is tagged as @slow");
});

// Tagging Tests in a Group
test.describe(
	"Report Feature Tests",
	{
		tag: "@report", // Tag all tests in this group
	},
	() => {
		test("Test Report Header", async ({ page }) => {
			// Create mocked report header content
			await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Report Header (Mock)</title>
      </head>
      <body>
        <h1>Report Header</h1>
      </body>
      </html>
    `);

			// Test logic for report header
			// ... (further test steps)
		});

		test(
			"Test Full Report (Slow & VRT)",
			{
				tag: ["@slow", "@vrt"], // Multiple tags for this test
			},
			async ({ page }) => {
				// Create mocked report page content
				await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Report Page (Mock)</title>
      </head>
      <body>
        <h1>Report</h1>
        <p>This is a mocked report page content.</p>
      </body>
      </html>
    `);

				// Simulate a slower test with visual regression check
				await page.waitForTimeout(3000); // Wait for 3 seconds
				console.log("This test is tagged as both @slow and @vrt");
			}
		);
	}
);
