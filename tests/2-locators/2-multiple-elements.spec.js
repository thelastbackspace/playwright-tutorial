import { test, expect } from "@playwright/test";

// This line imports the necessary functions from the @playwright/test library.
//  - test: This function defines a test case.
//  - expect: This function helps with making assertions about the test results (verifying expected conditions).

test("Locate Multiple Elements", async ({ page }) => {
	// This line defines a test case named "Locate Multiple Elements".
	//  - The async keyword indicates the test is asynchronous (waits for promises to resolve before continuing).
	//  - The argument { page } provides access to the Playwright page object.

	await page.goto("https://toonface.store/");

	// This line instructs Playwright to navigate the browser to the provided URL.

	page.waitForSelector("h2");
	const headings = await page.$$("h2");
	// This line finds all elements on the page with the tag name "h2" and stores them in an array called "headings".
	//  - $$ is used for selecting multiple elements.

	for (const heading of headings) {
		const title = await heading.textContent();
		console.log(title); // Access text content directly
		await heading.isVisible();
		// Check if the heading is visible.
	}

	// This loop iterates through each element in the "headings" array.
	//  - const heading of headings: This syntax iterates through each element in the array and assigns it to the variable "heaing".
	//  - Inside the loop:
	//      - const title = await heading.textContent(): This line fetches the text content of the current element (todo) and stores it in the variable "title".
	//      - console.log(title): This line prints the title (text content) to the console.

	await page.close();

	// This line closes the browser page after the test is complete.
});

// FAQS:

// 1. Why page.waitForSelector("h2") is still needed?

// Answer:
// Guarantees Element Availability: page.goto navigates to the URL, but it doesn't necessarily mean all elements are loaded and ready for interaction. The <h2> elements might be present in the HTML but not yet rendered on the page.
// Prevents Errors: If you try to find elements with page.$$("h2") before they're available, you might encounter errors. page.waitForSelector explicitly waits for the specified selector ("h2" in this case) to appear on the page, preventing such errors.

// 2. What if the selector "h2" doesn't exist on the page?
// Answer: If the selector "h2" doesn't exist on the page, the page.waitForSelector call will eventually time out. Playwright provides options to configure the timeout duration and handle timeouts gracefully using try...catch blocks.

// 3. Is there a way to select elements with a different attribute, like class name?
// Answer: Absolutely! You can use different selectors supported by Playwright. For example, to select elements with a specific class name "product-title", you can use page.$$(".product-title").

// 4. Can we verify if the elements we find are actually visible on the screen?
// Answer: Yes! Playwright provides methods like isVisible() to check the visibility of an element. You can use this within the loop to ensure you're only processing visible headings.

// 5. How can we test for specific content within the headings?
// Answer: Playwright allows you to combine waiting for elements with assertions about their content. You can use expect(heading).toContainText("Sale") inside the loop to verify if the heading contains the word "Sale".
