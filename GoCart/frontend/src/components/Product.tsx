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
  showQuantityOnly?: boolean
}

function Product({ productName, productID, increment, decrement, quantity, showQuantityOnly }: ProductProps) {
  const [newProductQuantity, setProductQuantity] = useState<number>(0)
  const shoppingListProducts: ProductProps[] = useReactiveVar(shoppingListProductsVar)

  useEffect(() => {
    const productInList = shoppingListProducts.find((p) => p.productID === productID)
    setProductQuantity(productInList?.productQuantity ?? 0)
  }, [shoppingListProducts, productID])

  // Add product to the shopping list
  const handleAddProduct = () => {
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
  }

  const handleRemoveProduct = () => {
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
  }

  // Function to increment the product quantity
  function incrementProduct() {
    handleAddProduct()
    setProductQuantity(newProductQuantity + 1)
  }

  // Function to decrement the product quantity
  function decrementProduct() {
    handleRemoveProduct()
    if (newProductQuantity > 0) {
      setProductQuantity(newProductQuantity - 1)
    }
  }

  return (
    <div className="card flex justify-between">
      {/* Display the product id based on 'productID' prop */}
      <Link to={`/productDetailsPage/${productID}`} className="text-lg font-semibold col-span-2">
        {productName}
      </Link>

      {/* Display the buttons if props is true */}
      {decrement && quantity && increment && (
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

      {/* Display the quantity if quantity prop is true */}
      {showQuantityOnly && (
        <div className="flex h-max">
          <span className="text-xl p-2">{newProductQuantity}</span>
        </div>
      )}
    </div>
  )
}

export default Product
