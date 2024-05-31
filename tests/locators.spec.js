import { test, expect } from "@playwright/test";

test("locators", async ({ page }) => {
	// Navigate to the specified URL
	await page.goto("https://demo.playwright.dev/todomvc/#/");

	// Method 1
	// Locate the element with the class name "new-todo"
	let toDoInput = page.locator(".new-todo");

	// Fill the located element with the text "Learn Playwright"
	await toDoInput.fill("Learn Playwright");

	// Simulate pressing the Enter key
	await page.keyboard.press("Enter");

	// Method 2
	await page.fill(".new-todo", "Learn React");

	// Simulate pressing the Enter key
	await page.keyboard.press("Enter");

	// Close the page
	await page.close();
});
