/// <reference types="Cypress" />

describe('Learniong Viewport', () => {

    beforeEach(() => {
    
        cy.visit('https://www.google.com/');
    
    });
    
    it('ipad-2', () => {
        cy.viewport('ipad-2')
        cy.log('ipad-2');
        cy.wait(3000);
    
     });

    it('iphone-x', () => {
     cy.viewport('ipad-2')
    cy.log('iphone-x');
    cy.wait(3000);
});
    
    it('macbook-16', () => {
        cy.viewport('macbook-16')
        cy.log('macbook-16');
        cy.wait(3000);
    
    });
    
 it('custom Resolution', () => {
        cy.viewport(600, 750)
        cy.log('custom resolution');
        cy.wait(3000);
    
     });









    
});