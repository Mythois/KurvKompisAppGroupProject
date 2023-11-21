// cypress/integration/productsPage.spec.js
describe('Products Page', () => {
  beforeEach(() => {
    // Assuming your application is running locally on port 3000
    cy.visit('http://localhost:5174')
  })

  it('displays products correctly', () => {
    // Type a search term in the search bar
    cy.get('.search-bar').type('Kylling')

    // Click the Search button (assuming there is one)
    cy.get('.search-button').click()

    // Assert that the product list is rendered
    cy.get('.product-list').should('be.visible')

    // Verify that a specific product is in the list
    cy.contains('.product-item', 'Kylling Vingeklubb Grillet 500g Prior').should('be.visible')

    // You can continue to add more test steps based on your application's behavior
  })

  it('allows adding products to the register', () => {
    // Click on the "Add product to register" button
    cy.contains('Add product to register').click()

    // Assert that the Add Product page is displayed
    cy.url().should('include', '/AddproductToRegister')

    // Perform interactions on the Add Product page (filling out forms, submitting, etc.)
    // ...

    // You can continue to add more test steps based on your application's behavior
  })

  it('allows sorting products', () => {
    // Click on the ascending sort button
    cy.get('.sort-asc-button').click()

    // Assert that the products are sorted in ascending order
    cy.get('.product-list-item').each(($product, index, $list) => {
      if (index < $list.length - 1) {
        const currentProduct = $product.text().trim()
        const nextProduct = $list
          .eq(index + 1)
          .text()
          .trim()
        expect(currentProduct <= nextProduct).to.be.true
      }
    })

    cy.get('.sort-asc-button').click()

    cy.get('.product-list-item').each(($product, index, $list) => {
      if (index < $list.length - 1) {
        const currentProduct = $product.text().trim()
        const nextProduct = $list
          .eq(index + 1)
          .text()
          .trim()
        expect(currentProduct >= nextProduct).to.be.true
      }
    })

    // You can continue to add more test steps based on your application's behavior
  })

  // Add more tests as needed
})
