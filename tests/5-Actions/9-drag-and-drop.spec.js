// **Drag and Drop Interactions**

// Playwright provides functionalities for simulating drag and drop interactions on web pages. This is useful for testing user interactions with draggable elements and drop targets.

// **1. Drag and Drop with `locator.dragTo()`:**

// This method offers a convenient way to perform drag and drop in a single step:

import { test, expect } from "@playwright/test";

test("Drag and Drop with locator.dragTo()", async ({ page }) => {
	// **Create a simple HTML page with draggable elements**
	await page.setContent(`
    <div id="item-to-be-dragged" draggable="true">Draggable Item</div>
    <div id="item-to-drop-at">Drop Target</div>
  `);

	// **Perform Drag and Drop**

	// Locate the draggable element
	const draggableElement = await page.locator("#item-to-be-dragged");

	// Locate the drop target element
	const dropTarget = await page.locator("#item-to-drop-at");

	// Perform drag and drop using locator.dragTo()
	await draggableElement.dragTo(dropTarget);

	// You can add assertions here to verify the drag and drop success (e.g., visual change on the page)
});
