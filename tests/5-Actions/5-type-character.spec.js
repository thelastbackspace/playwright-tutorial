// **Actions: Typing Characters**

// Playwright provides `locator.pressSequentially()` for simulating user typing
// character by character. This method is useful in scenarios where:

// - The web page has special keyboard handling that requires precise key events.
// - You want to simulate a user typing slowly with delays between keystrokes.

// **Important Note:**
// For most text input scenarios, use`locator.fill()` which is more efficient and handles basic input well.

// Here's an example demonstrating typing with delay:

// **Explanation:**

// - **`pressSequentially`:** This method simulates a user typing by pressing each character
//   one by one. It emits all the necessary keyboard events (`keydown`, `keyup`, `keypress`).
// - **Optional Delay:** The `delay` option allows you to specify a pause (in milliseconds)
//   between key presses, mimicking a user typing speed.

// **Choosing the Approach:**

// - **Prefer `fill`:** In most cases, use `fill` for text input as it's more efficient
//   and handles basic scenarios effectively.
// - **Use `pressSequentially` Sparingly:** Only use `pressSequentially` when the web page
//   has special behavior requiring precise key events or when you want to simulate slow
//   user typing with delays for testing purposes.

import { test, expect } from "@playwright/test";

test("Type Characters with Delay", async ({ page }) => {
	// **Create a simple HTML page with an input field**
	await page.setContent(`
    <input id="messageInput" type="text" />
  `);

	// **2. Typing with Delay**

	// Here, we define two variables:
	// - `message`: This string holds the text we want to type into the input field.
	// - `delay`: This integer represents the delay (in milliseconds) between each keystroke.
	//   You can adjust this value to control the simulated typing speed.
	const message = "This is a typed message";
	const delay = 50; // Adjust delay in milliseconds for desired typing speed

	await page.locator("#messageInput").pressSequentially(message, { delay });
	// to simulate user typing. Let's break down this line:
	//   - `page.locator("#messageInput")`: This part finds the input element on the page
	//     using its ID "messageInput". Playwright provides the `locator` method to interact
	//     with web page elements.
	//   - `.pressSequentially(message, { delay })`: This method types the characters in the
	//     `message` string one by one into the input field. The optional `delay` object sets
	//     a pause between each key press, mimicking a user typing slowly.

	// This line essentially simulates a user slowly typing the message "This is a typed message"
	// into the input field with a 50-millisecond delay between each keystroke (adjustable with `delay`).
});
