/// <reference types="cypress" />

import { LoginPage } from "../pageObjects/loginSauceDemo";
import { InventoryListPage } from "../pageObjects/productListPage";
import { CheckoutPage } from "../pageObjects/checkoutPage";

describe('Add to Cart and complete a purchase', () => {
    const loginPage = new LoginPage();
    const productListPage = new InventoryListPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        loginPage.fnNavigate();
        let username = 'standard_user';
        let password = 'secret_sauce';
        loginPage.fnLogin(username, password);
        //verify successfull login 
        cy.url().should('include', '/inventory.html');
    })

    it('Sort and Add to cart and complete a purchase', () => {

        //Sort according to Price low to high
        const txtPriceItemToSort = 'Price (low to high)';
        productListPage.getProductSortContainer().should('exist');
        productListPage.getProductSortContainer().select(txtPriceItemToSort);

        // add the last item to the cart
        productListPage.getInventoryItem()
            .last()
            .find('.btn.btn_primary.btn_small.btn_inventory ')
            .click();

        //verify if item added 
        productListPage.getInventoryItem()
            .last()
            .find('.btn.btn_secondary.btn_small.btn_inventory ')
            .should('contain', 'Remove');

        //Now sort on Name A to Z
        const txtItemToSort = 'Name (A to Z)';
        productListPage.getProductSortContainer().select(txtItemToSort);

        //add the top right item to the cart (According to our UI , the second element is the top right element)
        productListPage.getInventoryItem()
            .eq(1)
            .find('.btn.btn_primary.btn_small.btn_inventory ')
            .click();

        //verify if item added 
        productListPage.getInventoryItem()
            .eq(1)
            .find('.btn.btn_secondary.btn_small.btn_inventory ')
            .should('contain', 'Remove');

        //verify shopping cart has 2 items
        productListPage.getShoppingCartLink().should('be.visible');
        productListPage.getShoppingCartBadge().should('have.text', '2');

        //click on the shoppingcartlink
        productListPage.getShoppingCartLink().click();
        cy.url().should('include', '/cart.html');

        //verify the item in the cart 
        productListPage.getInventoryItem().should('have.length', 2);

        //fetch the item names and store in a variable
        productListPage.getInventoryItemName().then($items => {
            const itemNames = [];

            // Iterate over each item to get their text
            $items.each((index, element) => {
                itemNames.push(element.innerText);
            });

            // Store the names in a variable for later use
            cy.wrap(itemNames).as('addedItemNames');
        });

        // Proceed to checkout
        productListPage.getBtnCheckout().click();
        cy.url().should('include', '/checkout-step-one.html');

        // Fill in the checkout information
        let txtFirstName = 'Johan';
        let txtLastName = 'Das';
        let txtZipOrPostalCode = '12345'
        checkoutPage.getFirstName().type(txtFirstName);
        checkoutPage.getLastName().type(txtLastName);
        checkoutPage.getZipOrPostalCode().type(txtZipOrPostalCode);

        // Click Continue to the next page of checkout
        checkoutPage.getBtnContinue().click();
        cy.url().should('include', '/checkout-step-two.html');

        //verify the checkout has the item displayed with name from previoulsly saved info
        productListPage.getInventoryItem().should('have.length', 2);
        cy.get('@addedItemNames').then((addedItemNames) => {
            addedItemNames.forEach(name => {
                cy.contains(name).should('be.visible');
            });
        });

        // Finish the checkout
        checkoutPage.getBtnFinish().click();
        cy.url().should('include', '/checkout-complete.html');

        // Verify order completion message
        const txtOrderMsg = 'Thank you for your order!'
        checkoutPage.getMsgOrderCompletion().should('contain', txtOrderMsg);
    })
})