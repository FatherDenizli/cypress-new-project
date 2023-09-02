/// <reference types="Cypress" />

describe('Validate PUT API', function() {

    it('Learning PUT API Testing', function() {

        cy.request('PUT',	'https://dummy.restapiexample.com/api/v1/update/21',{
         "name": "test",
        "salary": "3456",
        "age": "24",
        
         }).then((response) => {
            
          expect(response.status).equal(200);               
              
            
                
         
      
      });
         
         
    });
});