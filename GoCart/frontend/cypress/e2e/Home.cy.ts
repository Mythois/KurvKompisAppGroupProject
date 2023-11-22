describe('Home Page', () => {
  beforeEach(() => {
    // Go to the home page
    cy.visit('/')
  })

  it('renders the ShoppingList component', () => {
    // Assert that the ShoppingList component is rendered
    cy.get('[data-testid="cypress-ShoppingList"]', { withinSubject: null }).should('exist')
  })

  it('add product to shopping list', () => {
    cy.contains('Add products').click()

    // Assert that the Add Product page is displayed
    cy.url().should('include', '/Addproduct')
    cy.contains('+').click()
    cy.contains('GoCart').click()
    cy.contains('My shopping list').should('exist')

    cy.get('[data-testid="cypress-ShoppingList"]', { withinSubject: null }).should('exist')
  })
})
