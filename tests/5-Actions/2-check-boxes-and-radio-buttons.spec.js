// **Actions: Checkboxes**

// Playwright provides a convenient method `locator.check()` to interact with
// checkboxes. This method can be used with elements having the attribute:
//  - `input[type=checkbox]` (standard checkbox)

// Here's an example of checking a checkbox and asserting its state:

// Check the checkbox
// await page.getByLabel('I agree to the terms above').check();

// **Note:** You can replace `getByLabel` with other locator methods like `locator.byId` or `locator.name`.

// After checking a checkbox, you can assert its state using methods like:

// Assert the checked state (using getByLabel)
// expect(page.getByLabel('Subscribe to newsletter')).toBeChecked();

// This verifies if the element with the label "Subscribe to newsletter" is checked.

// **Explanation:**

// 1. **Checking a Checkbox:** The first line demonstrates checking a checkbox using `getByLabel`. It finds the checkbox based on its associated label text and then uses `check()` to programmatically check it.
// 2. **Asserting Checked State:** The second line showcases asserting the checked state of a different checkbox. It again uses `getByLabel` but targets a specific label ("Subscribe to newsletter"). However, instead of checking, it uses `expect` to verify if the element is currently checked with `toBeChecked()`.

// **Choosing the Methods:**

// - Use `check()` to interact with and check a checkbox.
// - Use `toBeChecked()` to assert if a checkbox is already checked after an action.

import { test, expect } from "@playwright/test";

test("Interact with Checkboxes and Radio Buttons", async ({ page }) => {
	// **Create a simple HTML page with checkboxes and radio buttons**
	await page.setContent(`
    <h2>Subscription Options</h2>
    <input type="checkbox" id="agreeTerms" />
    <label for="agreeTerms">I agree to the terms above</label><br>

    <h2>Newsletter</h2>
    <input type="checkbox" id="subscribeNewsletter" />
    <label for="subscribeNewsletter">Subscribe to newsletter</label><br>

    <h2>Size Selection</h2>
    <input type="radio" id="sizeS" name="sizeGroup" />
    <label for="sizeS">Small</label>
    <input type="radio" id="sizeM" name="sizeGroup" />
    <label for="sizeM">Medium</label>
    <input type="radio" id="sizeL" name="sizeGroup" />
    <label for="sizeL">Large</label><br>
  `);

	// **Interact with Checkboxes**

	// Check the "Agree to terms" checkbox
	await page.locator("#agreeTerms").check();

	// **Asserting Checked State (using both approaches)**

	// 1. Using page.getByLabel for direct assertion
	expect(page.getByLabel("Subscribe to newsletter")).toBeChecked(); // This also works

	// 2. Using fetched locator for readability (already checked)
	const subscribeCheckbox = await page.locator("#subscribeNewsletter");
	expect(await subscribeCheckbox.isChecked()).toBeFalsy(); // Expect it to be unchecked (initial state)

	// Check the "Subscribe to newsletter" checkbox
	await subscribeCheckbox.check();

	// Assert the checked state using the locator
	expect(await subscribeCheckbox.isChecked()).toBeTruthy(); // Expect it to be checked
});
