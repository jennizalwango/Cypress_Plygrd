import Login from "../../todo-list/src/LoginForm"

describe ('Home Page', ()=>
{
  it('Successfully loads the home page', ()=>{
    cy.visit('http://localhost:3000/')
  })
})

// test Navigation to  Login page
describe('Login page', ()=>{
  it('Clicking on login navigates to a new url', ()=>{
    cy.url('include', '/login')
  })
})

describe('Dashboard',()=>{
  it('it successfully nagivates to the dashboard page', ()=>{
    cy.url('include', '/dashboard')
  })
})

describe('Logout', ()=>{
  it('log out of the app', ()=>{
    cy.url('include', '/home')
  })
})