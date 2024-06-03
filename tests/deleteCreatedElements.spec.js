import { test, expect } from "@playwright/test";

test("Verify tasks added and deleted (with dummy tasks)", async ({ page }) => {
	// Navigate to the to-do list application
	await page.goto("https://demo.playwright.dev/todomvc/#/");

	// Add some dummy tasks (replace these with your actual tasks)
	await page.fill(".new-todo", "Buy groceries");
	await page.keyboard.press("Enter");
	await page.fill(".new-todo", "Clean the house");
	await page.keyboard.press("Enter");

	// Check if there are any existing tasks (optional)
	const existingTasks = page.locator(".todo-list li[data-testid='todo-item']");
	const existingTaskCount = await existingTasks.count();

	// Add the first task
	await page.fill(".new-todo", "Learn Playwright");
	await page.keyboard.press("Enter");

	// Verify the first task is added correctly
	const firstTask = page.locator(
		`.todo-list li:nth-child(${
			existingTaskCount + 1
		}) label[data-testid='todo-title']`
	);
	await expect(firstTask).toHaveText("Learn Playwright");

	// Add the second task
	await page.fill(".new-todo", "Learn React");
	await page.keyboard.press("Enter");

	// Verify the second task is added correctly
	const secondTask = page.locator(
		`.todo-list li:nth-child(${
			existingTaskCount + 2
		}) label[data-testid='todo-title']`
	);
	await expect(firstTask).toHaveText("Learn Playwright"); // Verify first task remains unchanged
	await expect(secondTask).toHaveText("Learn React");

	// Delete the first task using data-testid
	// (Optional) Wait for the delete button to be visible before clicking
	await page.waitForSelector(
		`.todo-list li:nth-child(${existingTaskCount + 1}) .destroy`,
		{ visible: true }
	);
	const firstDeleteButton = await page.locator(
		`.todo-list li:nth-child(${existingTaskCount + 1}) button.destroy` // Use data-testid or class
	);
	await firstDeleteButton.click();

	// Verify one less task after deleting the first one
	const remainingTasksAfterFirstDelete = await page
		.locator(".todo-list li[data-testid='todo-item']")
		.count();
	await expect(remainingTasksAfterFirstDelete).toBe(existingTaskCount + 1); // Adjusted for dummy tasks

	// Delete the second task
	const secondDeleteButton = await page.locator(
		".todo-list li:last-child button.destroy"
	); // Target the last item
	await secondDeleteButton.click();

	// Verify both tasks are deleted
	const remainingTasks = await page
		.locator(".todo-list li[data-testid='todo-item']")
		.count();
	await expect(remainingTasks).toBe(existingTaskCount); // Adjusted for dummy tasks

	// Optionally, close the page after verification
	await page.close();
});
