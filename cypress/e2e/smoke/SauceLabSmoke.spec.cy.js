/// <reference types="cypress" />

import { LoginPage } from "../../pageObjects/loginSauceDemo";
import { InventoryListPage } from "../../pageObjects/productListPage";

describe('Smoke Test for sauce labs demo application ', () => {
    const loginPage = new LoginPage();
    const productListPage = new InventoryListPage();
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        loginPage.fnNavigate();
    })

    it('Verify home page loads successfully', () => {
        //verify title and logo
        const txtPageTitle = 'Swag Labs';
        cy.title().should('eq', txtPageTitle);
        loginPage.getLoginLogo().should('be.visible');
        loginPage.getLoginContainer().should('be.visible');
    })

    it('Verify inventory/product page loads successfully', () => {
        loginPage.fnLogin(username, password);

        //verify successfull login 
        cy.url().should('include', '/inventory.html');
        
        //verify inventory list is displayed
        productListPage.getInventoryList().should('be.visible');
        productListPage.getInventoryItem().should('have.length.greaterThan', 0);
    })

    it('Verify Logout functionality', () => {
        loginPage.fnLogin(username, password);

        //click on the top left open menu and select logout
        productListPage.getBtnOpenMenu().click({ force: true });
        productListPage.getLinkLogout().click({ force: true });
        //verify home page url is displayed
        cy.url().should('eq', 'https://www.saucedemo.com/');
    })
})