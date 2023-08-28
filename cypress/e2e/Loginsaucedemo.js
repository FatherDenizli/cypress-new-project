/// <reference types="Cypress" /> 

describe('Validate Login Functionality', () => {
    
    
    it('Validate Login Functionality', () =>    {

        cy.visit("https://www.saucedemo.com/v1/index.html");

        cy.get('#user-name ').type('standard_user');
        
        cy.get('#password').type('secret_sauce');

        cy.get('#login-button').click();



        
 

     // Username:standard_user
    //  password:secret_sauce
        
    
    });
     
 
        


    
});