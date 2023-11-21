// cypress/integration/addCustomProductPage.spec.js
describe('Add Custom Product Page', () => {
  beforeEach(() => {
    // Assuming your application is running locally on port 3000
    cy.visit('http://localhost:5174/AddCustomProduct')
  })

  it('allows adding a custom product', () => {
    // Type the product name in the input field
    cy.get('.inputfield').type('Example Product')

    // Toggle and fill the categories section
    cy.contains('button', 'Add categories').click()
    cy.get('.inputfield').eq(0).type('Category1')
    cy.get('.inputfield').eq(1).type('Category2')
    cy.get('.inputfield').eq(2).type('Category3')
    cy.get('.inputfield').eq(3).type('Category4')

    // Toggle and fill the nutrition section
    cy.contains('button', 'Add nutrition').click()
    cy.get('.inputfield').eq(4).type('100') // Kcal
    cy.get('.inputfield').eq(5).type('10') // Fat
    cy.get('.inputfield').eq(6).type('20') // Carbohydrates
    cy.get('.inputfield').eq(7).type('30') // Proteins
    cy.get('.inputfield').eq(8).type('1') // Salt
    cy.get('.inputfield').eq(9).type('15') // Sugar

    // Toggle and fill the other info section
    cy.contains('button', 'Add other info').click()
    cy.get('.inputfield').eq(10).type('StoreName')
    cy.get('.inputfield').eq(11).type('BrandName')
    cy.get('.textarea').type('Additional information for the product.')

    // Click the "Add product" button
    cy.contains('button', '+ Add product').click()

    // Assert that the confirmation modal is visible
    cy.contains('.confirmation-modal', 'Example Product').should('be.visible')

    // You can add more assertions based on the expected behavior of your application
  })

  // Add more tests as needed
})
