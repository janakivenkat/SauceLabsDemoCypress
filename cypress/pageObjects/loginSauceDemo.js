export class LoginPage {

    fnNavigate() {
        cy.visit('https://www.saucedemo.com/');
    }

    getUsername() {
        return cy.get('[data-test="username"]');
    }

    getPassword() {
        return cy.get('[data-test="password"]');
    }

    getBtnLogin() {
        return cy.get('[data-test="login-button"]');
    }

    clickBtnLogin() {
        this.getBtnLogin().should('exist');
        this.getBtnLogin().click();
    }

    fnLogin(username, password) {
        this.getUsername().type(username);
        this.getPassword().type(password);
        this.clickBtnLogin();
    }

    getErrorMsg() {
        return cy.get('[data-test="error"]');
    }

    getLoginLogo() {
        return cy.get('.login_logo');
    }

    getLoginContainer() {
        return cy.get('[data-test="login-container"]');
    }
}