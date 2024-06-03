// Playwright Test - Video Recording

// This comment explains video recording in Playwright:
// Playwright allows recording videos of your test execution. This can be helpful
// for debugging visual regressions, understanding test behavior, and sharing
// test failures with others.

import { test, expect } from "@playwright/test";

// Mock login page HTML content (for testing)
const mockLoginPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login (Mock)</title>
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
`;

test("Login with Video Recording (on-first-retry)", async ({ page }) => {
	// Create mocked login page content
	await page.setContent(mockLoginPage);

	// Configure video recording (on-first-retry in this example)
	// Update your Playwright test configuration (playwright.config.ts)
	// with the desired video recording mode ('on', 'on-first-retry', etc.)
	//  'off': No video recording.
	// 'on': Records video for all tests.
	// 'retain-on-failure': Records video for all tests, but removes videos from successful runs.
	// 'on-first-retry': Records video only when retrying a test for the first time.

	// Login steps (assuming successful login)
	await page.fill("#username", "test_user");
	await page.fill("#password", "secret_password");
	await page.click("#login-button");

	// Assertions (replace with your assertions based on login success)
});

// The video will be saved in test results
