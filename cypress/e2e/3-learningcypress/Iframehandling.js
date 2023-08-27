/// <reference types="Cypress" />

describe('Handling Iframes', () => { 


    it('Validate that user should be able to write a text inside the available', () => {
    
        cy.visit('https://the-internet.herokuapp.com/tinymce');  
        
       
        cy.get('#mce_0_ifr').then(function ($iframe) {

            let iframebody = $iframe.contents().find('body');

                cy.wrap(iframebody)
                .clear()
                .type("You can not  enter Iframe without noting")
                
                .type('{selectall}')
            
                 cy.get('[aria-label="Bold"]').click()
        
        })
            
           

       
    
   });












})
