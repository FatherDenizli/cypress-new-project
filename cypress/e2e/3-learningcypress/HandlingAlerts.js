/// <reference types="Cypress" />

describe('Handling of Alerts in Cypress', () => {


    it('Handling of Basic Alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
        cy.get(':nth-child(1) > button').click();
        cy.on('window:alert', (alertText) => {        

            expect(alertText).to.contains('I am a JS Alert')
            
        });
    });
    
    it('Handling of Confirm Alert ', () => {
        
        cy.get(':nth-child(2) > button').click();

        cy.on('window:confirm', (AcceptConfirm) => {

            expect(AcceptConfirm).to.contains('I am a JS Confirm')
            
        });

    });
    
    it('Handling of Confirm Alert', () => {
        
      //  cy.get(':nth-child(3) > button').click();

        cy.on('window:confirm', (CancelPopup) => {
            
            return false;
            
             cy.get(':nth-child(2) > button').click();
             cy.get('#result').should('Have.text', 'You clicked: Cancel');
         
        })
       

    })
    
     it('Handling of Prompt Alert ', () => {
        
         cy.window().then(function (PromptAlert) {
            
             //Stub windows prompt
             cy.stub(PromptAlert, "prompt"). returns('Testing Codeproduct')
              
             cy.get(':nth-child(3) > button').click();
              
             cy.get('#result').contains('Testing Codeproduct');

            
        });

    });
         
           

});