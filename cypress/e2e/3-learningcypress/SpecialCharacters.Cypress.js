// Special characters:
cy.get('input').type('{enter}')
cy.get('input').type('{backspace}')
cy.get('input').type('{del}')
cy.get('input').type('{esc}')
cy.get('input').type('{end}')
cy.get('input').type('{home}')
cy.get('input').type('{insert}')
cy.get('input').type('{moveToEnd}')   // Move cursor to the end of typeable element
cy.get('input').type('{moveToStart}') // Move cursor to the start of typeable element
cy.get('input').type('{pageDown}')    // Scroll down
cy.get('input').type('{pageUp}')      // Scroll up
cy.get('input').type('{selectAll}')   // Select the entire input value

// Arrows:
cy.get('input').type('{upArrow}')
cy.get('input').type('{downArrow}')
cy.get('input').type('{leftArrow}')
cy.get('input').type('{rightArrow}')

// Modifier keys:
cy.get('input').type('{shift}')
cy.get('input').type('{ctrl}')
cy.get('input').type('{alt}')