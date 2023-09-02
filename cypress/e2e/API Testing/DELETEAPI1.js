/// <reference types="Cypress" />

describe('Validate DELETE API', function() {

    it('Learning DELETE API Testing', function() {

        cy.request('DELETE',	'https://dummy.restapiexample.com/api/v1/delete/2',{
          
        
         }).then((response) => {
            
          expect(response.status).equal(200);               
              
            
                
          
      
      });
         
         
    });
});