// cypress/integration/homePage.spec.js
describe('Home Page', () => {
  beforeEach(() => {
    // Assuming your application is running locally on port 3000
    cy.visit('http://localhost:5174')
  })

  it('renders the ShoppingList component', () => {
    // Assert that the ShoppingList component is rendered
    cy.get('.shopping-list').should('be.visible')
  })

  it('increes amount of product', () => {
    cy.get('.')
  })
})
