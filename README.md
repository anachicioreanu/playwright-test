# playwright-test

End-to-end tests for the [OrangeHRM demo site](https://opensource-demo.orangehrmlive.com) using [Playwright](https://playwright.dev) and [playwright-bdd](https://github.com/vitalets/playwright-bdd) (Gherkin syntax).

## Stack

- **Playwright** — browser automation, runs against Chromium, Firefox, and WebKit
- **playwright-bdd** — Gherkin `.feature` files compiled to Playwright tests
- **TypeScript**
- **Page Object Model** — locators and actions encapsulated in `pages/`

## Project structure

```
features/        # Gherkin .feature files (test scenarios in plain English)
steps/           # Step definitions binding Gherkin to Playwright
  fixtures.ts    # Custom test fixtures exposing page objects
pages/           # Page objects (one per page, *.page.ts)
playwright.config.ts
```

## Setup

```bash
npm install
npx playwright install
```

## Run tests

```bash
npm test                 # Generate BDD specs + run tests on all browsers
npm run bddgen           # Only regenerate BDD specs from feature files
npm run test:report      # Open the HTML report from the last run
```

Run a single browser:

```bash
npx bddgen && npx playwright test --project=chromium
```

## Test reports

After a test run, Playwright generates an HTML report with results, traces, screenshots, and videos for any failures. Open it with:

```bash
npm run test:report
```
