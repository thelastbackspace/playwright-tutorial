// Notes By Shubh Wadekar (https://www.linkedin.com/in/thelastbackspace/)

// ** How to Use Playwright Codegen **

// 1. **Open Playwright Codegen:** Run `npx playwright codegen` in your terminal.
// 2. **Interact with the Web Page:** Open the desired website in your browser and perform the actions you want to record. Playwright Codegen will capture these interactions.
// 3. **Generate Code:** Once finished, press `Ctrl` + `P` (or `Cmd` + `P` on macOS) to stop recording and generate the Playwright test code.

// ** Cheatsheet **

// | Keyboard Shortcut | Action |
// |---|---|
// | `Ctrl` + `Click` (or `Cmd` + `Click` on macOS) | Simulate a right-click on an element. |
// | `Shift` + `Click` | Simulate a middle-click on an element. |
// | `Esc` | Stop recording and discard the generated code. |
// | `Ctrl` + `P` (or `Cmd` + `P` on macOS) | Stop recording and generate the Playwright test code. |

// ** Important Notes **

// - Playwright Codegen generates basic test code that might require adjustments for more complex scenarios.
// - It's recommended to review and enhance the generated code for better maintainability and robustness.
// - Playwright Codegen primarily focuses on user interactions and might not capture element selectors perfectly. You might need to refine selectors for better test reliability.

// ** Additional Tips **

// - Use clear and descriptive variable names when interacting with elements.
// - Playwright Codegen is a starting point, and you can combine it with other Playwright features for more advanced testing.
// - To see more options related to codegen, you can use `npx playwright codegen --help`.

// ** Remember **

// Playwright Codegen is a valuable tool for initial test script creation, but manual refinement and understanding of Playwright concepts are crucial for robust and maintainable test automation.

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://www.amazon.in/");
	await page.getByRole("link", { name: "Electronics" }).click();
	await page
		.locator("#sobe_d_b_6_1")
		.getByRole("link", { name: "Laptops Laptops" })
		.click();
	await page.goto(
		"https://www.amazon.in/s/ref=nb_sb_noss?url=node%3D1375424031&field-keywords=Macbook"
	);
	await page.goto(
		"https://www.amazon.in/s?k=Macbook&rh=n%3A1375424031&ref=nb_sb_noss"
	);
	await page.getByText("out of 5 stars 66").first().click();
	const page1Promise = page.waitForEvent("popup");
	await page
		.getByRole("link", {
			name: "Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight",
			exact: true,
		})
		.first()
		.click();
	const page1 = await page1Promise;
	await page1
		.locator("#desktop_qualifiedBuyBox")
		.getByLabel("Add to Cart")
		.click();
	await page1.getByLabel("Proceed to checkout (1 item)").click();
});
