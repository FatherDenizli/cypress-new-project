/// <reference types="Cypress" />

describe('Validate Login Functionality', () => {

    it('Validate login with Valid Credentials', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        // cy.get('.oxd-button').click();

       // https://www.saucedemo.com/v1/index.html
        
        
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.xpath("//input[@placeholder='Password']").type('admin123');
        cy.xpath("//button[@type='submit']").click();

        
        
     });
    
});