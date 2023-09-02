/// <reference types="Cypress" />

    describe('This is file upload  tutorial ', () => {

    it('Learn Cypress File Upload', function()   {

        cy.visit('https://the-internet.herokuapp.com/upload')

        const myFile = 'logo.jpeg'
        
        cy.get('#file-upload').attachFile(myFile);

        cy.get('#file-submit').click();

        cy.get('#uploaded-files').contains('logo');
            
      });          
            
            
    });     
            
           
        
        
