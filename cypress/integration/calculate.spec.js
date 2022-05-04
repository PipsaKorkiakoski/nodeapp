/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/')
    //cy.visit('http://localhost:8080')
  })

  it('Test 1,2,3 sum', () => {
    cy.get('#number1').click().type(1)
    cy.get('#number2').click().type(2)
    cy.get('#number3').click().type(3)
    cy.get('#sum').submit()
  })
  it('Test 5 is prime number', () => {
    cy.get('#number').click().type(5)
    cy.get('#prime').submit()
  })

})
