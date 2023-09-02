/// <reference types="Cypress" />

    describe('This is file Download  tutorial ', function()  {

        it('Learn Cypress File Download', function () {
        
          cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
            'mydownloads', 'example1.jpg')
          
          cy.downloadFile('https://www.photo-paysage.com/albums/userpics/10001/Gibbon_river.jpg','mydownloads', 'example2.jpg')
        
            
      });          
            
            
    });     