// Notes By Shubh Wadekar (https://www.linkedin.com/in/thelastbackspace/)

// Soft Assertions in Playwright Test
// Soft assertions in Playwright Test allow you to perform multiple assertions within a test without the entire test stopping immediately if one assertion fails. This helps in debugging and understanding the overall state of the page after a series of actions.

// Key Points:

// Marking Assertions as Soft: Use expect.soft(locator) before an assertion to mark it as soft.
// Test Continuation: Even if a soft assertion fails, the test continues executing all remaining actions.

// Benefits:
// Improved Debugging: Allows you to see multiple assertion failures within a single test run.
// Understanding Page State: Helps verify the overall state of the page after user interactions.

// Limitations:
// No Immediate Failure: The test won't stop immediately on a soft assertion failure, requiring additional code to check for failure

import { test, expect } from "@playwright/test";

test("Checking multiple element properties", async ({ page }) => {
	// Create a simple HTML page with elements
	await page.setContent(`
    <h1 id="heading">This is heading</h1>
    <button id="myButton">Click me!</button>
  `);

	// Get references to elements
	const heading = await page.locator("#heading");
	const button = await page.locator("#myButton");

	// **Soft Assertions:**

	// Verify heading text (soft assertion)
	await expect.soft(heading).toHaveText("This is a heading");

	// Verify button text (soft assertion)
	await expect.soft(button).toHaveText("Click me!");

	console.log("Test completed!"); // Log a message assuming all assertions passed (soft or hard)
});
