export class CheckoutPage {

  getFirstName() {
    return cy.get('[data-test="firstName"]');
  }

  getLastName() {
    return cy.get('[data-test="lastName"]');
  }

  getZipOrPostalCode() {
    return cy.get('[data-test="postalCode"]');
  }

  getBtnContinue() {
    return cy.get('[data-test="continue"]');
  }

  getBtnFinish() {
    return cy.get('[data-test="finish"]');
  }

  getMsgOrderCompletion() {
    return cy.get('[data-test="complete-header"]');
  }

}