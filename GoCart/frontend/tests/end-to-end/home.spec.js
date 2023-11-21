// cypress/integration/homePage.spec.js
describe('Home Page', () => {
  beforeEach(() => {
    // Assuming your application is running locally on port 3000
    cy.visit('http://localhost:3000')
  })

  it('renders the ShoppingList component', () => {
    // Assert that the ShoppingList component is rendered
    cy.get('.shopping-list').should('be.visible')

    // You can add more assertions based on the structure of your ShoppingList component
  })

  it('navigates to the correct shopping list based on URL parameters', () => {
    // Generate a unique ID for testing (e.g., using a timestamp)
    const uniqueId = Date.now().toString()

    // Visit the page with a specific ID parameter
    cy.visit(`http://localhost:3000/${uniqueId}`)

    // Assert that the ShoppingList component is rendered
    cy.get('.shopping-list').should('be.visible')

    // Assert that the URL parameter is correctly reflected in the component
    cy.get('.shopping-list').invoke('attr', 'id').should('eq', uniqueId)

    // You can add more assertions based on the structure of your ShoppingList component
  })

  // Add more tests as needed
})
