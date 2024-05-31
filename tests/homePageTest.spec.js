// import two methods from the playwright library
// test is used to run tests
// expect is used to make assertions or add validation for test

const { test, expect } = require("@playwright/test");

// to start the test we have to use "test" function
// and we will have to pass two parameters
// name of the test
// callback function

//as js is asyncrhonous we will use async keyword
//so it means asynchronous function will return a promise
// and await will wait for the promise

test("Home Page", async ({ page }) => {
	// await is used to wait for the page to load
	// page.goto is used to go to the url
	await page.goto("https://demo.playwright.dev/todomvc");

	// to do in the page
	// 1. Verify Title of the webpage
	// 2. Verify URL of the webpage

	// 1. Verify Title of the webpage
	// page.title() is used to grab the page title
	// assign it to a variable
	let pageTitle = await page.title();

	//console.log for your reference
	console.log("Page Title", pageTitle);

	// verify the title of the page
	await expect(page).toHaveTitle("React • TodoMVC");

	// assign it to a variable
	let pageUrl = await page.url();

	//console.log for your reference
	console.log("Page Url", pageUrl);

	// 2. Verify URL of the webpage
	await expect(page).toHaveURL("https://demo.playwright.dev/todomvc/#/");

	await page.close();
});
