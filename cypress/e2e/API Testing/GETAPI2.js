/// <reference types="Cypress" />

describe('Validate GET API', function() {

    it('Learning GET API Testing', function() {

        cy.request('https://restful-booker.herokuapp.com/booking/106').then((response) => {
            
            expect(response.status).equal(200);

             expect(response.body).to.have.property('additionalneeds', 'Breakfast')
             let totalPrice = response.body.totalprice;
            expect(response.body).to.have.text('John')
            //expect(totalPrice).to.equal(111); 

            

           

           expect(response.body).to.deep.equal({
               
     
    "firstname": "John",
    "lastname": "Smith",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"

       
         
                  })
         })
         
    });
});