/// <reference types="Cypress" /> 

describe('Validate Login Functionality', () => {
    
    before(function () {

        cy.visit('https://www.saucedemo.com/v1/index.html');

     })    
      
    beforeEach(function () {

        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

    });
    
    it('Validate Login Functionality', () =>
    {

        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name']").click();
    
    });
     it('Validate Login Functionality', () => {

        cy.xpath("(//button[contains(text(),'ADD TO CART')])[1]").click();
    
     });
    
    afterEach(function () { 

        cy.xpath("//button[normalize-space()='Open Menu']").click();
        cy.get("#logout_sidebar_link").click();
        


    })
});