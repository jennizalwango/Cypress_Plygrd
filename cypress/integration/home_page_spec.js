import Login from "../../todo-list/src/LoginForm"

describe ('Home Page', ()=>
{
  it('Successfully loads the home page', ()=>{
    cy.visit('http://localhost:3000/')
  })
})

// test Navigation to  Login page
describe('Login', ()=>{
  it('Clicking on login  navigates to a new url', ()=>{
    cy.url('include', '/login')
  })
})