/// <reference types="Cypress" />

describe('Validate POST API', function() {

    it('Learning POST API Testing', function() {

        cy.request('POST',	'https://jsonplaceholder.typicode.com/todos',{
         
                 "userId": 57,
                 "title": "Tidy your room",
                 "completed": false
           
         }).then((response) => {
            
            expect(response.status).equal(201);               
              
             expect(response.body).to.have.property('title', 'Tidy your room');
             
             let ID = response.body.userId;
             
             expect(ID).to.equal(57);

//            expect(response.body).to.deep.equal({    
//                      "userId": 55,
//                      "title": "Tidy your room",
//                      "completed": false,
                     

//  })
          
         })
         
    });
});