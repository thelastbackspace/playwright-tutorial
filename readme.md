# Playwright Tutorial

Why should we use playwright:

1. Playwright enables reliable end to end testing for modern web apps
2. Playwright supports web browser apps, mobile web apps, APIs
3. Playwright supports JavaScript, TypeScript, Java, Python & .NET(C#)
4. Playwright supports Chromium, Webkit (Safari) & Firefox (headed/headless)
5. Playwright supports Windows, Mac, Linux and CI Runs

## Features of playwright

1. Free and open-source
2. Supports multiple browsers (Chromium, Webkit, Firefox)
3. Supports multiple languages (JavaScript, TypeScript, Java, Python, C#)
4. Supports multiple operating systems (Windows, Mac, Linux)
5. Easy setup and configuration
6. Automates functional test cases and APIs
7. Supports accessibility testing (with third-party plugins)
8. Generates reports using built-in functionality
9. Integrates with CI/CD and Docker
10. Enables parallel testing
11. Offers auto-wait functionality for synchronization during test execution
12. Includes built-in assertions for test verification
13. Supports multi-tab and multi-window testing
14. Handles iframe and shadow DOM elements
15. Accommodates test parameters
16. Enables mobile device emulation
17. Relatively faster than competitors
18. Supports both manual and automatic script writing

## Comparision between Playwright, Selenium & Cypress

<!-- To be added here -->

## how to install playwright

1. Install node
2. Then create a folder
3. Open the directory in Terminal
4. Run the following command to add playwright in the folder

```
npm init playwright@test
```

5. Run the following command to run the test.

```
npx playwright test
```

By default this will run in headless mode. In simple words, you won't see the browser.

6. Run the following command to run the test in headed mode

```
npx playwright test --headed
```

7. Run the following command to run the test in Ui Mode

```
npx playwright test --ui
```

8. Run the following command to run test on different browsers

```
npx playwright test --project webkit
```

```
npx playwright test --project webkit --project firefox
```

9. Run specific tests

```
npx playwright test homePageTest.spec.js
```

10. Run in debug mode

```
npx playywright test homePageTest.spec.js --debug
```

## Locating Elements in playwright

1. You can locate the element with property
2. You can also use CSS selectors
3. You can also use x-path

you can locate the element using the following line:

```
await page.locator('locator').click()
```

```
await page.click('locator')
```

## Locating multiple elements in webpage

1. structure:

```
await page.$$(loactor).
```

If no element is matching the locator so it will return empty value, it won't show any exception
