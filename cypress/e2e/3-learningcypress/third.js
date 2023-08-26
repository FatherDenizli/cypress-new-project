/// <reference types="Cypress" />

describe('Validate Login Functionality', () => {

   
    beforeEach(() => { 

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    })
   
    it('Validate login with Valid Credentials', () => {    

              
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.xpath("//input[@placeholder='Password']").type('admin123');
        cy.xpath("//button[@type='submit']").click();

        cy.xpath("//span[normalize-space()='Leave']").click();

        cy.get('.oxd-topbar-body-nav > ul').find('li, a').contains('Apply').click();

        // cy.get('.oxd-topbar-body-nav > ul').contains('Apply').click();
       // cy.get('.oxd-topbar-body-nav > ul').contains('apply', {matchCase:false}).click();
       // cy.get('.oxd-topbar-body-nav > ul').contains(/^M\w+/).click(); //Click Anchor Tag start with M
      
        //cy.contains('Apply').click();

  
        
     });

 afterEach(() => {   
    
             cy.wait(5000); //wait for 3 second
          
             //Select "LOgout" from dropdown  menu (Immportant)
            cy.get('.oxd-userdropdown-tab').click();
            
             cy.wait(5000); //wait for 3 second

            cy.xpath("//a[@role='menuitem']").each(function ($ele, index, list) {
         
                 
            //       cy.log($ele.text);
            if ($ele.text() ==='Logout') {
                
                cy.log("Found element");
                cy.wrap($ele).click();
             
            } else {

              cy.log("Current Value :" , $ele.text())
            }
        })
          


});
    
});