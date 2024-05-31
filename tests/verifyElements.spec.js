import { test, expect } from "@playwright/test";

test("Verify tasks added to the to-do list", async ({ page }) => {
	// Navigate to the to-do list application
	await page.goto("https://demo.playwright.dev/todomvc/#/");

	// Add the first task
	await page.fill(".new-todo", "Learn Playwright");
	await page.keyboard.press("Enter");

	// Verify the first task is added correctly
	const firstTask = page.locator(".todo-list li:nth-child(1) label"); // Target specific list item
	await expect(firstTask).toHaveText("Learn Playwright");

	// Add the second task
	await page.fill(".new-todo", "Learn React");
	await page.keyboard.press("Enter");

	// Verify the second task is added correctly
	const secondTask = page.locator(".todo-list li:nth-child(2) label"); // Target specific list item
	await expect(firstTask).toHaveText("Learn Playwright"); // Verify first task remains unchanged
	await expect(secondTask).toHaveText("Learn React");

	// Optionally, close the page after verification
	await page.close();
});
