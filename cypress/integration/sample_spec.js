
// #dumysample tests
describe('My First Test', () => {
  it ('Doesnot do much!', () => {
    expect(true).to.equal(true)    
  })
})

// Query for an element
describe('Testquery for an element', () =>{
  it('finds the content "type"', () =>{

// add click method on the link we found 

    cy.contains('type').click()
  })
})

describe('still test', () => {
  it('clicking "type" naviagets to a new url', () =>
  {
    cy.url().should('include', '/commands/actions')

    // Get an input,type into it and verify that the value has been updated

    cy.get('.action-email')
      .type('fake@gmail.com')
      .should('have.value', 'fake@gmail.com')
  })
})




