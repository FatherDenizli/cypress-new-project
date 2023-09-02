/// <reference types="Cypress" />

 // Load user data from a JSON file
   const userData = require('../../fixtures/userData.json');

describe('Data-Driven Tests with Multiple Users', () => {      

  beforeEach(() => {
      cy.visit('https://www.bluerentalcars.com/login')
      
  });

  userData.forEach((user) => {
    it("Login as ${user.email} - ${user.scenario}", function()  {
      cy.get('#formBasicEmail').type(user.email);
      cy.get('#formBasicPassword').type(user.password);
      cy.get("button[type='submit']").click();
 
  });
   });
  });
  
    
 