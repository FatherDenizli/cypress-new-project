/// <reference types="Cypress" />

describe('This is a drag and drop tutorial ', () => {

    it('Learn drag and drop', () => {

        cy.visit('https://vishalok12.github.io/jquery-dragarrange/')

        cy.wait(5000)

        cy.get('.draggable-element.d-1').drag('.draggable-element.d-3', {force:true})
            
            
            
            
            
            
           
        
        cy.wait(5000)

       
        


//         cy.get(":nth-child(3) > :nth-child(2) > .category-items")
//   .trigger("dragstart", { force: true }, { dataTransfer });
// cy.get(".workspace-overlay-new.ng-star-inserted")
//   .trigger("drop", { dataTransfer })
//   .wait(5000);
});
    
});