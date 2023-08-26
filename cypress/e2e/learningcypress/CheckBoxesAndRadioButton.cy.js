/// <reference types="Cypress" />

describe('Validate Check boxes and Radio Button', () => {

    it('Validate check boxes', () => {

        cy.visit('https://testcenter.techproeducation.com/index.php?page=checkboxes');        
        
       // Check all chexk boxes
        cy.get("input[type='checkbox']").check();
        cy.wait(3000);

        // Uncheck all chexk boxes
        cy.get("input[type='checkbox']").uncheck();

        // Check only particular check box
        cy.wait(5000);
        //cy.get("input[type='checkbox']").check('Checkbox 1');
        cy.get('#box1').check();
        cy.get('#box2').check();

              
        
    });

     it('Validate radio buttons', () => {

        cy.visit('https://testcenter.techproeducation.com/index.php?page=radio-buttons');        
        
          cy.get("input[type='radio']").first().check();
         cy.get('#yellow').check();
       cy.get('#yellow').check();
              
        
    });


    
});