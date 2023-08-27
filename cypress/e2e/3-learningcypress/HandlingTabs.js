/// <reference types="Cypress" />

describe('Handling Tabs', () => {


    it('Testing Tabs', () => {

        cy.visit('https://www.google.com/gmail/about/');

        cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').invoke('removeAttr', 'target').click();

        cy.get('.modules-lib__interstitial--cta-btn.glue-button.glue-button--medium-emphasis').click();
        
    });
    
});