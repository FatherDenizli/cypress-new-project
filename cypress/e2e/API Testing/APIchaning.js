/// <reference types="Cypress" />

describe('API Chaining ', function() {

    it('Validate user dynamically from all list of users ', function() {

           

        cy.request('https://reqres.in/api/users?page=2').then( (response) => {
            
            let userid = response.body.data[2].id

            cy.request({

                method: 'GET',
                url: 'https://reqres.in/api/users/' + userid,
                
                

            })
            
            
        })
          
   
         
         
    });
});