/// <reference types="Cypress" />


describe('This is fixture tutorials ', function() {

    before('load',function() {
       //Call the test data
        
        cy.fixture('datadriven').then(function (loginData) {

            this.loginData = loginData

        })
        
                
    })


    it.only('Learn data-driven testing or parameterizing a test', function()  {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

                
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.loginData.Username);

         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.loginData.Password);

        cy.get('.oxd-button').click();
        
        
        //To fix please change arrow functions () => { to non-arrow functions function() {.

          //If using this you need to use function() (very very important).



});

    
});