/// <reference types="Cypress" />

describe('Validate POST API', function() {

    it('Learning POST API Testing', function() {

        cy.request('POST',	'https://dummy.restapiexample.com/api/v1/create',{
         "name": "Reny Yctas",
         "salary": "1123",
         "age": "61"
         }).then((response) => {
            
          expect(response.status).equal(200);               
              
             expext(response.body).to.have.property('message', 'Successfully! Record has been added.');
             
             let age = response.body.data.age;
             
             expect(age).to.equal(61);

           expect(response.body).to.deep.equal({
                
        
      
    "status": "success",
    "data": {
        "name": "CRenyy Yctasy",
        "salary": "1233",
        "age": "61",
        "id": 2635
    },
    "message": "Successfully! Record has been added."


})
          
         })
         
    });
});