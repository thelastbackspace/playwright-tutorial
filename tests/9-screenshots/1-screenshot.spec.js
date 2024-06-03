// Playwright Test - Screenshots

// Playwright offers various ways to capture screenshots during tests.
// You can take screenshots of the entire page, specific elements, or even
// capture the image as a buffer for further processing.

import { test, expect } from "@playwright/test";

// Mock login page HTML content (for screenshots)
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

test("Screenshot Examples", async ({ page }) => {
	// Create mocked login page content
	await page.setContent(mockLoginPage);

	// 1. Full Page Screenshot
	await page.screenshot({ path: "full_page.png", fullPage: true }); // Capture entire scrollable page

	// 2. Element Screenshot (Login Form)
	await page.locator("#login-form").screenshot({ path: "login_form.png" }); // Capture specific element

	// 3. Screenshot to Buffer (for further processing)
	const buffer = await page.screenshot();
	console.log("Screenshot Buffer (base64):", buffer.toString("base64")); // Example logging (you can process this buffer)

	// ... (rest of your test steps)
});
