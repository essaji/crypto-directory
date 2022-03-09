/// <reference types="cypress" />

describe('Crypto Exchange Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should land on home page', () => {
    cy.contains('Crypto Exchange Directory').should('be.visible')
    cy.get(`[data-testid=exchange-card]`).should('be.visible')
  })

  it('Should navigate to exchange detail page', () => {
    cy.get('[data-testid=exchange-card]').first().click()
    cy.get(`[data-testid=exchange-detail]`).should('be.visible')
  })

  it('Should go back to Main page on clicking back button', () => {
    cy.get('[data-testid=exchange-card]').first().click()
    cy.get(`[data-testid=exchange-detail]`).should('be.visible')

    cy.contains('Back to Main').first().click()

    cy.contains('Crypto Exchange Directory').should('be.visible')
    cy.get(`[data-testid=exchange-card]`).should('be.visible')
  })
})