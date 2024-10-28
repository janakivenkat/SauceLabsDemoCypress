
## Sauce Labs Demo Cypress Tests

This project contains login and checkout functionality of sauce demo application(https://www.saucedemo.com/).

## Project Overview

The tests cover the following test cases:

## Smoke Suite
- **Smoke test**: Test that verifies home page, product page and logout functionality.

## E2E
- **Login functionality**: Test that verifies valid and invalid login functionality.
- **Shopping cart**: Tests adding product to the cart, sorting them and finishing the checkout process.

## Pre-requisites

Before running the tests, make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
             - During installation make sure you select npm manager checkbox option and install node.js
             - Check if environment variables are added in the system path 
             - Now restart the cmd prompt and try the below commands.
             - node -v
             - npm -v
             - You should get appropriate version numbers probably the latest node (v20.18.0) and npm(10.8.2)

- **Cypress**: Installed as a dev dependency in this project.
             - Make use of command npm install cypress --save-dev
             - After successful installation , try opening the cypress using command npx cypress open 
             - Create your first spec.cy.js file.
             - You can execute the test using the command npx cypress run in headless mode

## Installation

1. Clone the repository:

```bash
git clone https://github.com/janakivenkat/saucedemoCypressTest.git
```

2. Navigate to the project directory:

```bash
cd saucedemoCypressTest
```

3. Install the dependencies:

```bash
npm install
```

This will install Cypress and all other required packages.

## Running Tests

To open the Cypress Test Runner, use the following command:

```bash
npx cypress open
```

This will launch the Cypress UI, where you can run individual test files.

Alternatively, you can run all tests headlessly with:

```bash
npx cypress run
```

## Test Structure

## Smoke Suite
- **SauceLabSmoke**: Test that verifies home page and product pages are loaded successfully and logout functionality.

## E2E
- **LoginPage**: Test that verifies valid and invalid login functionality and verifying the header and footer elements.
- **ProductPage**: Tests that sorts the product , add them to the cart and finish the checkout process.

## Folder Structure

```
/cypress
  /e2e
    - LoginPage.spec.cy.js      // Login test cases
    - ProductPage.spec.cy.js      // Add to cart and checkout test cases
    /smoke
      - SauceLabSmoke.spec.cy.js   // Smoke test for home page, product page and logout test cases
  /pageObjects
    - loginSauceDemo.js         // Objects in the homepage
    - productListPage.js        // Objects in the Inventory list page
    - checkoutPage.js           // Objects in the checkout page

  /reports
    - index.html

  /screenshot
    ***Note : Appears only on failure

  /support
    - commands.js         // Custom Cypress commands
    - index.js            // Global configurations
```
## Mocha-awesome reporting (Add-ons)
In order to get HTML reports with screenshot, install mocha-awesome reporting 
Simply follow the necessary steps from the official website https://www.npmjs.com/package/cypress-mochawesome-reporter
Upon installation you get the appropriate HTML and screenshot reports in your project folder.

Here is sample html report screenshot

![SauceLabReport](https://github.com/user-attachments/assets/a8eb5fe0-8510-4ade-8a13-90a7368fb871)
