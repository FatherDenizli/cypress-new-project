/// <reference types="Cypress" />


describe('Learn Custom Commands ', function() {

     
        
                
   


    it.only('Validate Login using Custom Commands', function()  {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



        cy.Login('Admin', 'admin123');

       
});
 it.only('Validate Login using Custom Commands', function()  {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



        cy.Login('Admin', 'admin123');

       
});

    
});