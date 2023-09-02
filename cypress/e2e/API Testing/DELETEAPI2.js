 /// <reference types="Cypress" />

describe('Validate DELETE API', function() {

    it('Learning DELETE API Testing', function() {

        cy.request( {


            method: 'DELETE',
            url: 'https://dummy.restapiexample.com/api/v1/delete/3',
            failOnStatusCode:false,







         }); 
    });
});