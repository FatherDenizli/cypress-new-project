/// <reference types="Cypress" /> 

describe('BDD Style Assertions', () => {

   
    it('Should', () => {

     
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    cy.title().should('eq', 'OrangeHRM');

    cy.url().should('include', '/auth/login');

    cy.get('.oxd-text--h5').should('have.text', 'Login');
        
        cy.get('.oxd-sheet > :nth-child(2)').should('include.text', 'admin123');
        
        cy.get('.oxd-text--h5').should('not.contain', 'Logout');
        
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
       // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.not.be.visible');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('exist');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.enabled').and('be.not.be.disabled');
        
        cy.get('.oxd-button').should('have.css', 'background-color', 'rgb(255, 123, 29)');
        

        
   
     
   });
    
    it('Validate checkboxes length', () => {

     
    cy.visit(' https://form.jotform.com/230213815390549');//jotform student painting form
    
    cy.get("input[type='checkbox']").should('have.length',4); 

        
   
       
   });
   
    
     





});
    