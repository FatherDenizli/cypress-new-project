/// <reference types="Cypress" />

describe('Validate complex data using Assert', () => {

    cy.visit('http://google.com');

    //Asserting strings

    let firstName = 'TestingCodeproduct'

    Assertion.equal(firstName, 'TestingCodeproduct');


    
});