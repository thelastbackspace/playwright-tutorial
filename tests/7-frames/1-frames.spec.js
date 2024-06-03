// **Frames in Playwright**

// Introduction

// A webpage can be divided into sections that act like separate mini-webpages within the main document. These sections are called frames or iframes (inline frames).

// - **Main Frame:** Every webpage has a primary frame, also known as the main frame. This is the initial content displayed when you load a webpage.
// - **Page-Level Interactions:** Playwright interactions like `page.click()`, `page.type()`, etc., are assumed to target elements within the main frame by default.
// - **Additional Frames:** Webpages can have additional frames embedded using the `<iframe>` HTML tag. These iframes can display content from a different URL or even from the same webpage.

// Accessing Elements Inside Frames

// - **Frame Locators:** Playwright provides frame locators to identify and access specific frames within a webpage.
// - **Element Interaction:** Once you have a frame locator, you can use methods like `getByLabel`, `getByText`, etc., to find elements within that specific frame.

// // Frame Objects

// - **Frame Objects:** Playwright provides frame objects that represent individual frames within a webpage.
// - **Accessing Frame Objects:** You can use the `page.frame()` method to get a reference to a frame object.
// - **Methods:**
//   - `page.frame('frame-name')`: Retrieves the frame object based on its name attribute (replace `'frame-name'` with the actual name).
//   - `page.frame({ url: /.*domain.*/ })`: Retrieves the frame object whose URL matches the provided regular expression pattern.
// - **Interaction:** Once you have a frame object, you can interact with elements within that frame using methods like `fill`, `click`, `textContent`, etc., similar to how you interact with elements in the main frame.

// **Example:**

import { test, expect } from "@playwright/test";

test("Interact with Elements in Iframe", async ({ page }) => {
	// Open the main page with the iframe
	await page.goto("http://127.0.0.1:5500/tests/7-frames/sample-frame.html");

	// Wait for the iframe to be created (adjust selector if needed)
	await page.waitForSelector("#frame-container iframe");

	// Get a reference to the iframe element (locator)
	const frame = page.frameLocator("#frame-container iframe");

	// Interact with elements inside the frame using locators
	await frame.locator("#frame-input").fill("Text from Playwright");
	await frame.locator("#frame-button").click();

	// You can assert frame content or interactions here
	const frameText = await frame.locator("h2").textContent();
	console.log("Frame h2 text:", frameText);
});
