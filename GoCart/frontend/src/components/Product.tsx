// product component represents an product in an ItemList
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useReactiveVar } from '@apollo/client'
import { shoppingListProductsVar } from '../main.tsx' // Import your reactive variable

// It accepts props for item name, id, productQuantity, increment, decrement, quantity and showQuantityOnly
export interface ProductProps {
  productName: string // The name or description of the item
  productID: string // The id of the item
  productQuantity?: number
  increment?: boolean // Whether to display the increment button
  decrement?: boolean // Whether to display the decrement button
  quantity?: boolean // Whether to display the quantity field
  listView?: boolean
}

function Product({ productName, productID, increment, decrement, quantity, listView }: ProductProps) {
  const [newProductQuantity, setProductQuantity] = useState<number>(0)
  const shoppingListProducts: ProductProps[] = useReactiveVar(shoppingListProductsVar)

  useEffect(() => {
    // Retrieve the stored shopping list from local storage
    const storedShoppingList = localStorage.getItem('shoppingList')

    if (storedShoppingList) {
      const parsedList: ProductProps[] = JSON.parse(storedShoppingList)

      // Update the reactive variable with the stored shopping list
      shoppingListProductsVar(parsedList)

      // Find the product in the updated list
      const productInList = parsedList.find((p) => p.productID === productID)

      // Set the product quantity
      setProductQuantity(productInList?.productQuantity ?? 0)
    }
  }, [productID]) // Only run the effect when productID changes

  // Add product to the shopping list
  function incrementProduct() {
    setProductQuantity((prevQuantity) => prevQuantity + 1) // Use the state updater function

    const existingProductIndex = shoppingListProducts.findIndex((p) => p.productID === productID)

    if (existingProductIndex !== -1) {
      // Product already exists, increment quantity
      const updatedList = shoppingListProducts.map((p, index) =>
        index === existingProductIndex ? { ...p, productQuantity: (p.productQuantity ?? 0) + 1 } : p,
      )
      shoppingListProductsVar(updatedList)
    } else {
      // Product doesn't exist, add to the list with quantity 1
      shoppingListProductsVar([
        ...shoppingListProducts,
        { productID, productName, productQuantity: newProductQuantity + 1 },
      ])
    }

    // Save the updated list to local storage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingListProductsVar()))
  }

  function decrementProduct() {
    setProductQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0)) // Use the state updater function

    const existingProductIndex = shoppingListProducts.findIndex((p) => p.productID === productID)

    if (existingProductIndex !== -1) {
      // Product exists, decrement quantity
      const updatedList = shoppingListProducts.map((p, index) =>
        index === existingProductIndex ? { ...p, productQuantity: Math.max((p.productQuantity ?? 0) - 1, 0) } : p,
      )

      // Filter out products with quantity <= 0
      const filteredList = updatedList.filter((p) => p.productQuantity !== undefined && p.productQuantity > 0)

      shoppingListProductsVar(filteredList)
    }

    // Save the updated list to local storage
    localStorage.setItem('shoppingList', JSON.stringify(shoppingListProductsVar()))
  }

  return (
    <div className="card flex justify-between">
      {/* Display the product id based on 'productID' prop */}
      <Link to={`/productDetailsPage/${productID}`} className="text-lg font-semibold col-span-2">
        {productName}
      </Link>

      {/* Display the buttons if props is true */}
      {((increment && decrement && quantity) || listView) && (
        <div className="flex h-max">
          <button className="btn" onClick={decrementProduct}>
            -
          </button>
          <span className="text-xl p-2">{newProductQuantity}</span>
          <button className="btn" onClick={incrementProduct}>
            +
          </button>
        </div>
      )}
    </div>
  )
}

export default Product
