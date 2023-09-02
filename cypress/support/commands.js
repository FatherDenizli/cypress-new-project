// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';

 
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('Login', (username,password) => {
      
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);

       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
                
    cy.get('.oxd-button').click();
    
    

    cy.url().should('include', '/web/index.php/auth/logout');
    cy.title().should('eq', 'OrangeHRM Live | Login');
    
     

})

 

