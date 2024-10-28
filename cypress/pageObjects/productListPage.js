export class InventoryListPage {

    getHeaderContainer() {
        return cy.get('[data-test="header-container"]');
    }

    getPrimaryHeader() {
        return cy.get('[data-test="primary-header"]');
    }

    getSecondaryHeader() {
        return cy.get('[data-test="secondary-header"]');
    }

    getBtnOpenMenu() {
        return cy.get('[data-test="open-menu"]');
    }

    getPrimaryHeaderLabel() {
        return cy.get('.header_label');
    }

    getSecondaryHeaderTitle() {
        return cy.get('[data-test="title"]');
    }

    getProductSortContainer() {
        return cy.get('[data-test="product-sort-container"]');
    }

    getFooter() {
        return cy.get('[data-test="footer"]');
    }

    getFooterCopy() {
        return cy.get('[data-test="footer-copy"]');
    }

    getFooterTwitter() {
        return cy.get('[data-test="social-twitter"]');
    }

    getFooterFacebook() {
        return cy.get('[data-test="social-facebook"]');
    }

    getFooterLinkedin() {
        return cy.get('[data-test="social-linkedin"]');
    }

    getInventoryList() {
        return cy.get('[data-test="inventory-list"]');
    }

    getInventoryItem() {
        return cy.get('[data-test="inventory-item"]');
    }

    getInventoryItemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    getShoppingCartLink() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    getShoppingCartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]');
    }

    getBtnCheckout() {
        return cy.get('[data-test="checkout"]');
    }

    getLinkLogout() {
        return cy.get('[data-test="logout-sidebar-link"]');
    }
}