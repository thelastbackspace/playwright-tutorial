# Playwright Tutorial

Why should we use playwright:

1. Playwright enables reliable end to end testing for modern web apps
2. Playwright supports web browser apps, mobile web apps, APIs
3. Playwright supports JavaScript, TypeScript, Java, Python & .NET(C#)
4. Playwright supports Chromium, Webkit (Safari) & Firefox (headed/headless)
5. Playwright supports Windows, Mac, Linux and CI Runs

## Features of playwright

1. It is free and open source
2. It supports multiple browsers
3. It supports multiple languages
4. It supports multiple OS
5. Easy setup & configuration
6. We can automate functional test cases & API
7. It supports accessibility settings. This can be enabled by using 3rd party plugin
8. Generate reports using inbuilt functionality
9. It supports CI, CD, Docker
10. It supports parallel testing
11. It has auto wait feature. This is benefitical when you face synchronization problems while executing the test case. In simple words, it will wait for elements or sections to load
12. It also has built in assertions
13. It supports multi-tab and multi-window
14. It supports iframe and shadow dom elements
15. It also supports paramaters
16. It also supports mobile device emultaion
17. It is comparatively fasted than competitors
18. It supports manual script writing and automatic scripting

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
