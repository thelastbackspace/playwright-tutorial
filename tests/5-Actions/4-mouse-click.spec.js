// **Actions: Mouse Interactions**

// Playwright provides methods to simulate various mouse interactions on web pages.
// These actions mimic human behavior and can be used for testing purposes.

// Here's an example demonstrating different mouse interactions:

// **Explanation:**

// - **Generic Click:** Use `page.getByRole` or other locators to find the element and then call `click()` to perform a single left click.
// - **Double Click:** Use `dblclick()` to simulate a double click on the element.
// - **Right Click:** Use `click` with the `button: 'right'` option to perform a right click.
// - **Click with Modifier:** Use `click` with the `modifiers` option as an array containing the modifier key (e.g., `['Shift']`).
//     - We dynamically set the modifier (`clickModifier`) based on the OS to handle Control (Windows/Linux) or Meta (macOS) for consistency.
// - **Hover:** Use `hover()` to simulate hovering the mouse over the element.
// - **Click Specific Position:** Use `click` with the `position` option as an object containing coordinates (`{ x: 0, y: 0 }`) to click at a specific point on the element.

// **Choosing the Interaction:**

// The choice of mouse interaction depends on your testing scenario. Use the appropriate method to simulate the desired user behavior.

// **Under the Hood: Pointer Interactions**

// Playwright offers various methods for interacting with web page elements using the mouse or pointer. These methods perform a series of checks and actions before simulating user interactions:

// **Wait for Element Readiness:**

// - **DOM Presence:** Playwright waits for the element to be present in the Document Object Model (DOM) before interacting with it.
// - **Visibility:** It ensures the element is displayed and not hidden using CSS properties like `display: none` or `visibility: hidden`.
// - **Stability:** Playwright waits for animations or transitions to finish before interacting, ensuring the element is in a stable state.
// - **Scroll into View:** If necessary, Playwright scrolls the element into view if it's initially outside the viewport.
// - **Pointer Events:** It verifies that the element can receive pointer events (clicks, hovers) and isn't obscured by other elements.
// - **Retries:** Playwright retries the interaction if the element is detached during these checks.

// Forcing the click

// Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the actionability checks and force the click:

// await page.getByRole('button').click({ force: true });

// Programmatic click

// If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the HTMLElement.click() behavior via simply dispatching a click event on the element with locator.dispatchEvent():

// await page.getByRole('button').dispatchEvent('click');

import { test, expect } from "@playwright/test";

test("Perform Mouse Interactions", async ({ page }) => {
	// **Create a simple HTML page with elements**
	await page.setContent(`
    <button id="myButton">Click me</button>
    <span id="itemToInteract">This item</span>
  `);

	// **Click Interactions**

	// 1. Generic click (using getByRole)
	await page.getByRole("button").click(); // Clicks the button

	// 2. Double click
	await page.getByText("Item").dblclick(); // Double clicks the element with text "Item"

	// 3. Right click
	await page.getByText("Item").click({ button: "right" }); // Right clicks the element

	// 4. Click with modifier (Shift)
	await page.getByText("Item").click({ modifiers: ["Shift"] }); // Clicks with Shift held down

	// 5. Click with modifier (Control/Meta) - adjust for OS
	const clickModifier = process.platform === "darwin" ? "Meta" : "Control";
	//  "darwin" is a code used internally by Node.js to identify macOS.
	//     Ternary Operator: The ? : part is a ternary operator, a shorthand way of writing an if-else statement.
	// If True (=== "darwin"): If the OS is macOS, the code assigns "Meta" to the clickModifier variable. "Meta" refers to the Command key on macOS, which acts similarly to the Control key on other systems.
	// If False: If the OS is not macOS (presumably Windows or Linux), the code assigns "Control" to the clickModifier variable.
	await page.getByText("Item").click({ modifiers: [clickModifier] }); // Clicks with Control (Windows/Linux) or Meta (macOS) held down

	// 6. Hover over element
	await page.getByText("Item").hover(); // Hovers over the element with text "Item"

	// 7. Click specific position (top left corner)
	await page.getByText("Item").click({ position: { x: 0, y: 0 } }); // Clicks the top left corner of the element
});
