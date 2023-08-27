/// <reference types="Cypress" />

describe('Validate complex data using Assert', () => {

   
    it('Assert', () => {
       
     cy.visit('http://google.com');

    //Asserting strings

    let firstName = 'TestingCodeproduct'

        assert.equal(firstName, 'TestingCodeproduct');
        
 
        assert.include(firstName, 'Codeproduct');

        assert.typeOf(firstName, 'String');

        assert.notTypeOf(firstName, 'Integer');

        //Asserting Objects

        let person = {

            firstName:"Testing", lastName:"Codeproduct"

        }

        assert.property(person, 'lastName');

        assert.isObject(person);

        assert.deepPropertyVal(person, 'lastName', 'Codeproduct')

        assert.deepEqual(person, {
        
             firstName:"Testing", lastName:"Codeproduct"
    
   });
   
   
   
    });

    //Assertion Arrays

    let employeeIDs = [345, 678, 90, 321, 555]
    
    assert.isArray(employeeIDs);

    assert.includeDeepMembers(employeeIDs, [90, 555])

    assert.includeDeepOrderedMembers(employeeIDs, [345, 678, 90, 321, 555])

     //Asserting Objects
    assert.typeOf(employeeIDs, 'Array');
    



 

   
   

    
});