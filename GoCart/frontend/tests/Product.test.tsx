import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import Product, { ProductProps } from '../src/components/Product'
import React from 'react'

// Mocking the react-router-dom context for testing
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(), // Mocking useNavigate if needed
}))

describe('Product Component', () => {
  const sampleProduct: ProductProps = {
    productName: 'Sample Product',
    productID: '123',
    increment: true,
    decrement: true,
    quantity: true,
    listView: false,
  }

  test('renders Product correctly', async () => {
    // Test rendering of Product component
    const { getByText } = render(<Product {...sampleProduct} />)

    // Assert that the product name is rendered
    expect(getByText('Sample Product')).toBeTruthy()

    // Add more assertions as needed for increment, decrement buttons, quantity display, etc.
  })

  test('increments product quantity when + button is clicked', async () => {
    const { getByText } = render(<Product {...sampleProduct} />)

    // Get the + button and simulate a click event
    const incrementButton = getByText('+')
    fireEvent.click(incrementButton)

    // Get the quantity display element
    const quantityDisplay = getByText('1') // Update this based on how your quantity is displayed

    // Assert that the quantity is incremented by 1
    expect(quantityDisplay.textContent).toBe('1') // Use .textContent to access the text content and perform assertions
  })

  test('decrements product quantity when - button is clicked', async () => {
    const { getByText } = render(<Product {...sampleProduct} />)

    // Get the - button and simulate a click event
    const decrementButton = getByText('-')
    fireEvent.click(decrementButton)

    // Get the quantity display element
    const quantityDisplay = getByText('0') // Update this based on how your quantity is displayed

    // Assert that the quantity is decremented by 1
    expect(quantityDisplay.textContent).toBe('0') // Use .textContent to access the text content and perform assertions
  })

  test('does not render increment and decrement buttons when props are false', async () => {
    const { queryByText } = render(<Product {...sampleProduct} increment={false} decrement={false} />)

    const incrementButton = queryByText('+')
    const decrementButton = queryByText('-')

    expect(incrementButton).toBeNull()
    expect(decrementButton).toBeNull()
  })
})
