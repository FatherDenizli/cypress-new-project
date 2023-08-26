/// <reference types="cypress"/>

describe('Learn BDD Explicit Assertions', () => {

    it('Validate Complex Data using expect', () => {

        cy.visit('http://google.com');

        // simple String Verrification

        let pageName = "Google Homepage";

        expect(pageName).to.not.equal("Google");

        expect(pageName).to.be.equal("Google Homepage");

        expect(pageName).to.be.a('string');

        expect(pageName).to.have.length.of.at.most(15);

        let person = {

            firstName:"Testing", lastName:"Codeproduct"

        }

        expect(person).to.deep.equal({

          firstName:"Testing", lastName:"Codeproduct"

        })
        
        expect(person).to.have.property('lastName','Codeproduct');
        

        //Validating Arrays

        let emplyeeIDs = [34, 45, 114,456, 701]
        
        expect(emplyeeIDs).to.have.ordered.members([34, 45, 114,456, 701]);

        expect(emplyeeIDs).to.include(456)

        expect(emplyeeIDs).to.include(701)
        
        expect(emplyeeIDs).to.include.members([45,114])







        
    });
    
});