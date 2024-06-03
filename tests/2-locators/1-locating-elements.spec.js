import { test, expect } from "@playwright/test";

// This line imports the necessary functions from the @playwright/test library.
//  - test: This function defines a test case.
//  - expect: This function helps with making assertions about the test results (verifying expected conditions).

test("Locate Search Box and Button - Wikipedia", async ({ page }) => {
	// This line defines a test case named "Locate Search Box and Button - Wikipedia".

	// Navigate to Wikipedia
	await page.goto("https://en.wikipedia.org/");

	// This line instructs Playwright to navigate the browser to the provided Wikipedia URL.

	// **Property Selector:** Find the search input by its "name" attribute
	const searchInputByProperty = await page.locator("input[name='search']");

	// This line finds the search input element on the page using its "name" attribute ("search").
	//  - page.locator: This function creates a locator object for finding elements on the page.
	//  - input[name='search']: This is the selector string that specifies the element to find.
	//      - input: Matches HTML elements of type "input".
	//      - [name='search']: Matches elements with a "name" attribute set to "search".

	// **CSS Selector:** Find the search button using a class containing "search"
	const searchButtonByCss = await page.locator(".cdx-search-input__end-button"); // Handles potential class name variations

	// This line finds the search button element on the page using its CSS class.
	//  - .cdx-search-input__end-button: This is the CSS selector string targeting the element's class.
	//      - .: Matches any element.
	//      - cdx-search-input__end-button: Matches elements with the class name "cdx-search-input__end-button".

	// Find login link by ID
	const loginLinkById = await page.locator("#pt-login-2");

	// This line finds the login link element on the page using its ID ("pt-login-2").
	//  - #pt-login-2: This is the selector string targeting the element's ID.
	//      - #: Matches elements with a specific ID attribute.
	//      - pt-login-2: Matches the element with the ID "pt-login-2".

	// **XPath Selector:** Locate the create using a specific path within the HTML structure
	const createAccountLink = await page.locator(
		"//a[@data-mw='interface']//span[contains(text(),'Create account')]"
	); //  class usage

	// This line finds the element containing the text "Create account" on the page using XPath.
	//  - //a[@data-mw='interface']//span[contains(text(),'Create account')]: This is the XPath expression.
	//      - //: Matches any element in the document.
	//      - a[@data-mw='interface']: Matches "a" (anchor) elements with a "data-mw" attribute set to "interface".
	//      - //span[contains(text(),'Create account')]: Matches "span" elements within the previous element that contain the text "Create account".

	// Verify existence (optional)
	await expect(searchInputByProperty).toBeVisible();
	await expect(searchButtonByCss).toBeVisible();
	await expect(loginLinkById).toBeVisible();

	await expect(createAccountLink).toBeVisible();

	// This section verifies if the elements found by the selectors are actually visible on the page (optional).
	//  - await expect(locator).toBeVisible(): This checks if the element identified by the locator is visible on the page.

	// Interact with elements (example)
	await searchInputByProperty.fill("Playwright");
	await searchButtonByCss.click();

	// This section demonstrates interacting with the elements.
	//  - await searchInputByProperty.fill("Playwright"): This fills the search input with the text "Playwright".
	//  - await searchButtonByCss.click(): This clicks the search button.
});

// FAQs for the Playwright Test Code:

// 1. What are the different ways to find elements on the page in this code?

// The code uses three methods to locate elements:

// Property Selector: This targets elements based on their attributes. Here, it finds the search input by its "name" attribute (input[name='search']).
// CSS Selector: This leverages CSS class names to identify elements. The code uses .cdx-search-input__end-button to find the search button (considering potential class name variations).
// XPath Selector: This utilizes an XPath expression to locate elements based on their position and attributes within the HTML structure. The code uses XPath to find the "Create account" link.

// 2. Why are there multiple ways to find elements?

// Flexibility: Different selectors offer varying levels of specificity depending on the HTML structure of the page.
// Robustness: If one selector fails due to potential changes (e.g., class name variations), another might still work.

// 3. What does await page.goto("https://en.wikipedia.org/") do?
// This line instructs Playwright to open the Wikipedia website (https://en.wikipedia.org/) in the browser for testing.

// 4. What happens in the lines await expect(searchInputByProperty).toBeVisible() etc.?
// These lines (optional) verify if the elements found by the selectors are actually visible on the page. This ensures the test doesn't proceed with interactions on hidden elements.

// 5. How can I modify this code to search for something different on Wikipedia?
// You can change the text filled in await searchInputByProperty.fill("Playwright") to your desired search term.

// 6. Can I use this code to automate other actions on Wikipedia?
// Yes! Playwright allows you to interact with elements after finding them. You could potentially automate tasks like clicking links, filling forms, and verifying content.
