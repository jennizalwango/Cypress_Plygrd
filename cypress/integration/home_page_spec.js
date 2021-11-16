describe ('Home Page', ()=>
{
  it('Successfully loads', ()=>{
    cy.visit('http://localhost:3000/')
    cy.get('input')
    cy.get('form > button').click()
    cy.get(':nth-child(2) > button').click()
  })
})