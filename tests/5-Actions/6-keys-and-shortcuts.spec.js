// **Actions: Keys and Keyboard Shortcuts**

// Playwright allows simulating key presses and keyboard shortcuts using `locator.press()`. This method offers flexibility for various use cases.

// **Key Presses:**

// - **Basic Keys:** Use the logical key names like `Enter`, `Backspace`, `Tab`, `ArrowUp`, etc., matching the `keyboardEvent.key` property.
// - **Single Characters:** Alternatively, provide a single character like `"a"` or `"#"` to directly type it.

// **Keyboard Shortcuts:**

// - **Modifier Keys:** Combine modifier keys (`Shift`, `Control`, `Alt`, `Meta`) with other keys (e.g., `Shift+A`, `Control+ArrowRight`).
//   - Remember to specify the capital letter for uppercase with `Shift` (e.g., `Shift+A`). `Shift+a` produces lowercase as if CapsLock is on.

// **Explanation:**

// - We use `page.getByText('Submit').press('Enter')` to simulate pressing Enter on the "Submit" button.
// - `page.getByRole('textbox').press('Control+ArrowRight')` dispatches Control+Right arrow on a text box.
// - `page.getByRole('textbox').press('$')` types the dollar sign ($) symbol.
// - `page.locator('#name').press('Shift+A')` presses Shift+A, resulting in an uppercase "A".
// - `page.getByRole('tab').press('Control+Shift+T')` simulates the keyboard shortcut for opening a new tab (Control+Shift+T).

// **Choosing the Method:**

// - Use logical key names for standard keys.
// - Use single characters for direct character input.
// - Use modifier keys and shortcut strings for complex interactions.

import { test, expect } from "@playwright/test";

test("Simulate Key Presses and Shortcuts", async ({ page }) => {
	// **Create a simple HTML page with elements**
	await page.setContent(`
    <button id="submitButton">Submit</button>
    <input id="textInput" type="text" />
  `);

	// **Simulate Key Presses and Shortcuts**

	// 1. Press Enter on "Submit" button
	await page.getByText("Submit").press("Enter"); // Simulates clicking the button

	// 2. Dispatch Control+Right on text input
	await page.locator("#textInput").press("Control+ArrowRight"); // Move cursor right

	// 3. Press dollar sign ($)
	await page.locator("#textInput").press("$"); // Type the dollar sign symbol

	// 4. Press Shift+A (uppercase A)
	await page.locator("#textInput").press("Shift+A"); // Type uppercase "A"

	// You can add assertions here to verify actions (e.g., new tab opening)
});
