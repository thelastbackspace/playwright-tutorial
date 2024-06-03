// **Actions: Selecting Options from Dropdown**

// Playwright allows selecting options from dropdown menus using `locator.selectOption()`.
// This method offers flexibility by accepting either the option's value or label for selection.
// It can also handle multiple selections in dropdowns that allow it.

// Here's an example demonstrating different selection methods:

// **Select Options**

// // 1. Single selection by value
// const colorSelect = await page.getByLabel('Choose a color');
// await colorSelect.selectOption('blue'); // Selects the option with value "blue"

// // **Note:** You can replace `getByLabel` with other locator methods like `locator.byId` or `locator.name`.

// // 2. Single selection by label
// await colorSelect.selectOption({ label: 'Green' }); // Selects the option with label "Green"

// // 3. Multiple selections (dropdown must allow it)
// const multiColorSelect = await page.getByLabel('Choose multiple colors');
// await multiColorSelect.selectOption(['red', 'green']); // Selects options with values "red" and "green"

// **Explanation:**

// - **Single Selection:** We can select an option by its value (e.g., `'blue'`) or by its label using an object with the `label` property (e.g., `{ label: 'Green' }`).
// - **Multiple Selections:** For dropdowns allowing multiple selections, provide an array of desired option values (e.g., `['red', 'green']`) to `selectOption`.

// **Assertions (not shown):**

// You can add assertions after selecting options to verify their selection. This might involve using methods like `colorSelect.innerText()` to check the displayed text.

// **Choosing the Method:**

// - Use the option value for a more precise selection, especially when dealing with duplicate labels.
// - Use the label for a more human-readable approach, especially if the values are not user-friendly.

import { test, expect } from "@playwright/test";
test("Select Options from Dropdown", async ({ page }) => {
	// **Create a simple HTML page with a dropdown**
	await page.setContent(`
    <label for="colorSelect">Choose a color:</label>
    <select id="colorSelect">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select><br>

    <label for="multiColorSelect">Choose multiple colors:</label>
    <select multiple id="multiColorSelect">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  `);

	// **Select Options**

	// 1. Single selection by value
	const colorSelect = await page.getByLabel("Choose a color");
	await colorSelect.selectOption("blue"); // Selects the option with value "blue"

	// 2. Single selection by label
	await colorSelect.selectOption({ label: "Green" }); // Selects the option with label "Green"

	// 3. Multiple selections
	const multiColorSelect = await page.getByLabel("Choose multiple colors");
	await multiColorSelect.selectOption(["red", "green"]); // Selects options with values "red" and "green"

	// You can add assertions here to verify the selected options
	// ...
});
