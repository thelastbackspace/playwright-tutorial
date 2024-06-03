import { test, expect } from "@playwright/test";

test("Verify tasks added to the to-do list (with dummy tasks)", async ({
	page,
}) => {
	// Navigate to the to-do list application
	await page.goto("https://demo.playwright.dev/todomvc/#/");

	// Add some dummy tasks (replace these with your actual tasks)
	await page.fill(".new-todo", "Buy groceries");
	await page.keyboard.press("Enter");
	await page.fill(".new-todo", "Clean the house");
	await page.keyboard.press("Enter");

	// Check if there are any existing tasks (optional)
	const existingTasks = page.locator(".todo-list li");
	const existingTaskCount = await existingTasks.count();

	// Add the first task
	await page.fill(".new-todo", "Learn Playwright");
	await page.keyboard.press("Enter");

	// Verify the first task is added correctly
	const firstTask = page.locator(
		`.todo-list li:nth-child(${existingTaskCount + 1}) label` // Adjusted for dummy tasks
	);
	await expect(firstTask).toHaveText("Learn Playwright");

	// Add the second task
	await page.fill(".new-todo", "Learn React");
	await page.keyboard.press("Enter");

	// Verify the second task is added correctly
	const secondTask = page.locator(
		`.todo-list li:nth-child(${existingTaskCount + 2}) label` // Adjusted for dummy tasks
	);
	await expect(firstTask).toHaveText("Learn Playwright"); // Verify first task remains unchanged
	await expect(secondTask).toHaveText("Learn React");

	// Optionally, close the page after verification
	await page.close();
});
