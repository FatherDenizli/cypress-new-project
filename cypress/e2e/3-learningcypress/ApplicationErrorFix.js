/// <reference types="Cypress" /> 

describe('Fixing Error Generating from Application not from Cypress code', () => {
     
    
//    // I added this code block and fixed the error
//     Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })
    
    
    it('Fixing Application Error', () => {

        cy.visit("https://chercher.tech/practice/popups#");
     

    });
     });















//https://chercher.tech/practice/popups#