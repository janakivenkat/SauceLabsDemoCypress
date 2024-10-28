/// <reference types="cypress" />

import { LoginPage } from "../pageObjects/loginSauceDemo";
import { InventoryListPage } from "../pageObjects/productListPage";

describe('Login Sauce Demo', () => {
    const loginPage = new LoginPage();
    const productListPage = new InventoryListPage();

    beforeEach(() => {
        loginPage.fnNavigate();
    })

    it('Login using invalid username and password', () => {
        let username = 'locked_out_user';
        let password = 'secret_sauce';
        const txtErrMsg = 'Epic sadface: Sorry, this user has been locked out.'
        loginPage.fnLogin(username, password);
        //verify the error message
        loginPage.getErrorMsg().should('be.visible');
        loginPage.getErrorMsg().should('contain', txtErrMsg);
    })

    it('Login using valid username and password', () => {
        let username = 'standard_user';
        let password = 'secret_sauce';
        const txtHeaderLabel = 'Swag Labs';

        loginPage.fnLogin(username, password);

        //verify successfull login 
        cy.url().should('include', '/inventory.html');

        //verify the header
        productListPage.getHeaderContainer().then(($header) => {
            if ($header.length > 0) {
                // header exists
                cy.log('The header exists.');
                // verify primary and secondary header
                productListPage.getPrimaryHeader().should('be.visible');
                //verify the different elements in primary header
                productListPage.getBtnOpenMenu().should('exist');
                productListPage.getPrimaryHeaderLabel().should('contain', txtHeaderLabel);
                productListPage.getShoppingCartLink().should('be.visible');

                //verify the different elements in secondary header
                productListPage.getSecondaryHeaderTitle().should('contain', 'Products');
                productListPage.getProductSortContainer().should('be.visible');
            } else {
                // header does not exist
                cy.log('The header does not exist.');
            }
        });

        //verify the footer
        productListPage.getFooter().should('exist');
        productListPage.getFooterTwitter().should('exist');
        productListPage.getFooterLinkedin().should('exist');
        productListPage.getFooterFacebook().should('exist');
        productListPage.getFooterCopy().should('contain', 'Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    })
})