// Notes By Shubh Wadekar (https://www.linkedin.com/in/thelastbackspace/)
// ** Playwright Auto-retrying Assertions **

// Playwright offers auto-retrying assertions, a convenient way to handle dynamic content and improve test stability.

// ** What are they? **

// - Assertions that wait for a specific condition to be met before considering the test successful.
// - Playwright automatically retries the assertion for a short duration (default: 5 seconds) if the condition isn't met initially.

// ** Benefits: **

// - Helps manage web pages with dynamic content that loads asynchronously.
// - Reduces test flakiness caused by temporary delays in element appearances or state changes.

// ** How to use them? **

// - Use various Playwright assertion methods like `toHaveText`, `toBeVisible`, etc.
// - Playwright automatically retries by default.

// ** Important Notes: **

// - Excessive retries might indicate underlying issues with page behavior. Investigate if a long wait is necessary.
// - You can adjust the default timeout using `expect.setTimeout` if needed.

// ** Cheatsheet: **

// Returning Assertion -> Description
// await expect(locator).toBeAttached() Element is attached
// await expect(locator).toBeChecked()	Checkbox is checked
// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeEditable()	Element is editable
// await expect(locator).toBeEmpty()	Container is empty
// await expect(locator).toBeEnabled()	Element is enabled
// await expect(locator).toBeFocused()	Element is focused
// await expect(locator).toBeHidden()	Element is not visible
// await expect(locator).toBeInViewport()	Element intersects viewport
// await expect(locator).toBeVisible()	Element is visible
// await expect(locator).toContainText()	Element contains text
// await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
// await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
// await expect(locator).toHaveAttribute()	Element has a DOM attribute
// await expect(locator).toHaveClass()	Element has a class property
// await expect(locator).toHaveCount()	List has exact number of children
// await expect(locator).toHaveCSS()	Element has CSS property
// await expect(locator).toHaveId()	Element has an ID
// await expect(locator).toHaveJSProperty()	Element has a JavaScript property
// await expect(locator).toHaveRole()	Element has a specific ARIA role
// await expect(locator).toHaveScreenshot()	Element has a screenshot
// await expect(locator).toHaveText()	Element matches text
// await expect(locator).toHaveValue()	Input has a value
// await expect(locator).toHaveValues()	Select has options selected
// await expect(page).toHaveScreenshot()	Page has a screenshot
// await expect(page).toHaveTitle()	Page has a title
// await expect(page).toHaveURL()	Page has a URL
// await expect(response).toBeOK()	Response has an OK status

// Non Returning Assertion -> Description
// Assertion	Description
// expect(value).toBe()	Value is the same
// expect(value).toBeCloseTo()	Number is approximately equal
// expect(value).toBeDefined()	Value is not undefined
// expect(value).toBeFalsy()	Value is falsy, e.g. false, 0, null, etc.
// expect(value).toBeGreaterThan()	Number is more than
// expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
// expect(value).toBeInstanceOf()	Object is an instance of a class
// expect(value).toBeLessThan()	Number is less than
// expect(value).toBeLessThanOrEqual()	Number is less than or equal
// expect(value).toBeNaN()	Value is NaN
// expect(value).toBeNull()	Value is null
// expect(value).toBeTruthy()	Value is truthy, i.e. not false, 0, null, etc.
// expect(value).toBeUndefined()	Value is undefined
// expect(value).toContain()	String contains a substring
// expect(value).toContain()	Array or set contains an element
// expect(value).toContainEqual()	Array or set contains a similar element
// expect(value).toEqual()	Value is similar - deep equality and pattern matching
// expect(value).toHaveLength()	Array or string has length
// expect(value).toHaveProperty()	Object has a property
// expect(value).toMatch()	String matches a regular expression
// expect(value).toMatchObject()	Object contains specified properties
// expect(value).toStrictEqual()	Value is similar, including property types
// expect(value).toThrow()	Function throws an error
// expect(value).any()	Matches any instance of a class/primitive
// expect(value).anything()	Matches anything
// expect(value).arrayContaining()	Array contains specific elements
// expect(value).closeTo()	Number is approximately equal
// expect(value).objectContaining()	Object contains specific properties
// expect(value).stringContaining()	String contains a substring
// expect(value).stringMatching()	String matches a regular expression

// ** Remember: **

// - Choose appropriate assertions based on the element's state and behavior you want to verify.

// ** Example: **

import { test, expect } from "@playwright/test";

test("Verifying Search Functionality on Wikipedia", async ({ page }) => {
	// Navigate to Wikipedia
	await page.goto("https://en.wikipedia.org/");

	// Find search input using its role (search box)
	const searchInput = await page.getByRole("searchbox");

	// **Assertion 1: Verify search input is present (toBeAttached)**
	await expect(searchInput).toBeAttached();

	// Click the search button
	const searchButton = await page.getByRole("button", { name: /Search/i }); // Replace with actual button name
	await searchButton.click();

	// **Assertion 2: Verify URL update after search (toHaveURL)**
	await expect(page).toHaveURL("https://en.wikipedia.org/wiki/Playwright"); // Matches URL containing "Playwright"

	// **Assertion 3: Verify search results heading is visible (toBeVisible)**
	const searchResultsHeading = await page.getByRole("main");
	await expect(searchResultsHeading).toBeVisible();

	// **Assertion 4: Verify at least one Login Button exists (toHaveCount)**
	const LoginButtonLink = page.locator("#pt-login-2 a span"); // Replace with your search result element selector
	await expect(LoginButtonLink).toHaveCount(1); // Assert at least one result

	// **Assertion 5: Verify first search result contains "Log in" (toContainText)**
	await expect(LoginButtonLink.first()).toContainText("Log in");
});
