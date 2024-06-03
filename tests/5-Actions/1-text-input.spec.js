// **Actions: Text Input**

// Text input can be easily filled using the `locator.fill()` method. This method
// focuses the element and simulates typing the provided text. It works for various
// input elements like `<input>`, `<textarea>`, and those with the `contenteditable` attribute.

// Here are examples of filling different text input types:

import { test, expect } from "@playwright/test";
test("Filling Text Inputs", async ({ page }) => {
	// Create a simple HTML page with different input elements
	await page.setContent(`
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter your name">
    <br>

    <label for="birthdate">Birth Date:</label>
    <input type="date" id="birthdate">
    <br>

    <label for="appointmentTime">Appointment Time:</label>
    <input type="time" id="appointmentTime">
    <br>

    <label for="localTime">Local Time:</label>
    <input type="datetime-local" id="localTime">
  `);

	// Fill the name text input
	await page.locator("#name").fill("Peter");

	// Fill the birth date input
	await page.locator("#birthdate").fill("2020-02-02"); // YYYY-MM-DD format

	// Fill the appointment time input
	await page.locator("#appointmentTime").fill("13:15"); // HH:MM format

	// Fill the local datetime input
	await page.locator("#localTime").fill("2020-03-02T05:15"); // YYYY-MM-DDTHH:MM format

	// You can add assertions here to verify the input values
	// ...
});
