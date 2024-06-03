import { test, expect } from "@playwright/test";

test("Locate Elements on Wikipedia", async ({ page }) => {
	// Navigate to Wikipedia
	await page.goto("https://en.wikipedia.org/");

	// **1. getByRole:** Find the search input using its role (search box)
	const searchInputByRole = await page.getByRole("searchbox");

	// This line uses Playwright's `getByRole` method to find the search input element on the page.
	//  - `getByRole("searchbox")`: This searches for an element with the accessibility role "searchbox". This ensures the element is identified as a search input by assistive technologies.

	// **2. getByText:** Find a link to a popular topic (e.g., "On this day") using its text content
	const onThisDayLink = await page.getByText("On this day");

	// This line uses `getByText` to find a link element containing the text "On this day".
	//  - `getByText("On this day")`: This searches for an anchor element (`<a>`) with the text content "On this day". This targets the link to the "On this day" section of Wikipedia.

	// **3. getByLabel:** There isn't a label associated with the search button on Wikipedia. You can use other methods.
	// **Option A: getByRole:** Find the search button using its role (button)
	const searchButtonByRole = await page.getByRole("button", {
		name: /Search/i,
	}); // Search button text might contain "Search"

	// This line finds the search button using `getByRole` with some additional options.
	//  - `getByRole("button", { name: /Search/i })`: This searches for a button element (`<button>`) whose text content partially matches "Search" (case-insensitive using the `/i` flag).

	// **Option B: getByText (if the button text is unique):**
	// const searchButtonByText = await page.getByText("Search");  // Uncomment if search button text is unique

	// This commented-out line demonstrates using `getByText` if the search button text is unique.
	//  - `getByText("Search")`: This searches for an element with the exact text content "Search". This might be less robust if the button text changes.

	// **4. getByPlaceholder:** Find the search input using its placeholder text ("Search Wikipedia")
	const searchInputByPlaceholder = await page.getByPlaceholder(
		"Search Wikipedia"
	);

	// This line finds the search input again, this time using its placeholder text.
	//  - `getByPlaceholder("Search Wikipedia")`: This searches for an input element (`<input>`) with the placeholder attribute set to "Search Wikipedia".

	// **5. getByAltText:** Find a random image by its alt text (assuming images have alt text)
	const randomImage = await page.getByAltText("Wikimedia Foundation");

	// This line attempts to find a random image by its alt text. This might not be optimal for all scenarios.
	//  - `getByAltText(/image/i)`: This searches for an image element (`<img>`) with alt text that partially matches "Wikimedia Foundation" (case-insensitive").

	// **6. getByTitle:** Find the "Create account" link using its title attribute
	const createAccountLink = await page.getByTitle("Create account");

	// This line finds the "Create account" link using its title attribute.
	//  - `getByTitle("Create account")`: This searches for an anchor element (`<a>`) with the title attribute set to "Create account".

	// Check if visible
	await expect(searchInputByRole).toBeVisible();
	await expect(onThisDayLink).toBeVisible();
	await expect(searchButtonByRole).toBeVisible();
	await expect(searchInputByPlaceholder).toBeVisible();
	await expect(randomImage).toBeVisible();
	await expect(createAccountLink).toBeVisible();

	// This section verifies if the elements found by the selectors are actually visible on the page using Playwright's `expect` function and the `toBeVisible` matcher.
	//  - `await expect(searchInputByRole).toBeVisible()`: This checks if the search input element identified by `searchInputByRole` is visible on the page. This ensures the test doesn't proceed with interactions on hidden elements.
});

// ------- Notes --------

// ** Concept(s) **
// Element Locators: Strategies to find specific elements on a web page for interaction or testing.

// ** Locators in this Code **

// getByRole: Targets elements based on their accessibility role (e.g., "searchbox"). Useful for identifying elements intended for specific purposes.
// getByText: Finds elements containing a specific text content (e.g., "On this day" link). Simple and effective for elements with unique text.
// getByLabel: Locates elements based on the text associated with their label (less common in this example). Ideal when a label describes the element clearly.
// getByPlaceholder: Identifies input elements using their placeholder text (e.g., "Search Wikipedia"). Useful for search inputs with clear placeholders.
// getByAltText: Attempts to find images with a specific alt text attribute (e.g., "image"). Not always reliable due to inconsistent alt text usage.
// getByTitle: Targets elements based on their title attribute (e.g., "Create account" link). Useful when the title provides a clear description.

// ----------------------

// ** Additional Notes **

// This code prioritizes accessibility-focused locators (getByRole) for robustness.
// The code demonstrates checking element visibility using expect and toBeVisible for better test control.
// While the code works on Wikipedia, selectors might need adjustments for other websites.

// ----------------------

// ** Tips **

// Choose locators that are specific, maintainable, and align with the element's purpose and accessibility attributes.
// Consider the potential for dynamic content changes and adjust selectors accordingly.

// ----------------------

// Notes By Shubh Wadekar (https://www.linkedin.com/in/thelastbackspace/)
