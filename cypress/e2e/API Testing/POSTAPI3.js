/// <reference types="Cypress" />

describe('Validate POST API', function() {

    it('Learning POST API Testing', function() {

        cy.request('POST',	'https://restful-booker.herokuapp.com/booking',{
         
                 "firstname": "Mavi",
                 "lastname": "Ozdemir",
                 "totalprice": 1231,
                 "depositpaid": true,
                 "bookingdates": {
                     "checkin": "2023-09-09",
                     "checkout": "2023-10-21"
                  },
                "additionalneeds": "Lunch"
           
         }).then((response) => {
            
            expect(response.status).equal(200);               
              
            // expect(response.body).to.have.property('additionalneeds', 'Lunch');
             
            //  let totalPrice = response.body.userId;
             
            //  expect(totalPrice).to.equal(1231);

//            expect(response.body).to.deep.equal({    
//                      "userId": 55,
//                      "title": "Tidy your room",
//                      "completed": false,
                     

//  })
          
         })
         
    });
});