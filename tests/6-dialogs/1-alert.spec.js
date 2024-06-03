// **Handling Dialogs in Playwright**

// Playwright provides functionalities to interact with various dialogs that can appear on web pages, including:

// - `alert()`: A simple message dialog to inform the user.
// - `confirm()`: A dialog prompting the user for confirmation with "OK" and "Cancel" buttons.
// - `prompt()`: A dialog prompting the user for input with a text field and "OK" and "Cancel" buttons.
// - `beforeunload`: A dialog that appears when the user tries to navigate away from a page with unsaved data.

// **1. Handling alert(), confirm(), and prompt() Dialogs (Default Behavior):**

// By default, Playwright automatically dismisses these dialogs without any intervention required. This behavior is suitable for scenarios where you don't need to interact with the dialog content.

// **2. Handling alert(), confirm(), and prompt() Dialogs (Custom Actions):**

// If you need to perform actions on these dialogs, such as accepting a confirmation or filling a prompt, you can register a dialog handler using `page.on('dialog')`. This handler will be invoked whenever one of these dialogs appears.

import { test, expect } from "@playwright/test";

test("Handle Dialogs", async ({ page }) => {
	// **1. Handling alert()

	await page.setContent(`
    <button onclick="alert('This is an alert!')">Show Alert</button>
   
  `);

	// Click buttons to trigger dialogs

	// Alert: No need for a handler, Playwright dismisses it automatically
	await page.getByRole("button", { name: "Show Alert" }).click();

	// Confirm: Register a handler to accept the confirmation
	page.on("dialog", async (dialog) => {
		console.log("Confirm Dialog Message:", dialog.message()); // Optional: Log message
		await dialog.accept();
	});

	// Close the page
	await page.close();
});
