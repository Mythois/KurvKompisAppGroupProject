// product component represents an product in an ItemList
import { useState } from 'react'
import { Link } from 'react-router-dom'

// It accepts props for item name, id, increment, decrement, and quantity
interface ProductProps {
  productName: string // The name or description of the item
  productID: string // The id of the item
  increment?: boolean // Whether to display the increment button
  decrement?: boolean // Whether to display the decrement button
  quantity?: boolean // Whether to display the quantity field
}

function Product({ productName, productID, increment, decrement, quantity }: ProductProps) {
  const [productQuantity, setProductQuantity] = useState<number>(0)

  // Function to increment the product quantity
  function incrementProduct() {
    setProductQuantity(productQuantity + 1)
  }

  // Function to decrement the product quantity
  function decrementProduct() {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1)
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
          <span className="text-xl p-2">{productQuantity}</span>
          <button className="btn" onClick={incrementProduct}>
            +
          </button>
        </div>
      )}
    </div>
  )
}

export default Product
