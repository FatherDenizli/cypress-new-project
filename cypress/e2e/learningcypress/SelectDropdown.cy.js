/// <reference types='Cypress' />

describe('Validate dropdown ', function()   {


    it('Validate select based dropdown', function () {
    
        //This is selection of one option from dropdawn menu
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_sort_container').select('Price (high to low)');
    
       // This is selection of one option from google when serarcing
        // Autocomlete
         

    });
    
     it('Validate Auto Complete based dropdown', function () {
    
         
         cy.visit('https://www.google.com');
         
         cy.get('#APjFqb').type('cypress project');
         cy.contains('cypress project structure github').click();
         
    
       // This is selection of one option from google when serarcing
        // Autocomlete
         

});








    
});