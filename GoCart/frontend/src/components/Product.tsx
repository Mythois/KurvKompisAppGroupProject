// This component renders a product card with the product name and the ability to increment or decrement the quantity of the product
// If the increment or decrement props are false, then the buttons to increment or decrement the quantity are not displayed

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProductProps {
  productName: string
  productID: string
  increment?: boolean
  decrement?: boolean
  quantity?: boolean
}

function Product({ productName, productID, increment, decrement, quantity }: ProductProps) {
  const [productQuantity, setProductQuantity] = useState<number>(0)
  const navigate = useNavigate()

  function incrementProduct(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation() // Stop the event from propagating to the card
    setProductQuantity(productQuantity + 1)
  }

  function decrementProduct(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation() // Stop the event from propagating to the card
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1)
    }
  }

  function handleCardClick() {
    navigate(`/productDetailsPage/${productID}`)
  }

  return (
    <div className="card flex justify-between" onClick={handleCardClick}>
      <div className="text-lg font-semibold col-span-2">{productName}</div>
      {decrement && quantity && increment && (
        <div className="flex h-max">
          <button
            className="btn"
            onClick={(e) => {
              decrementProduct(e)
            }}
          >
            -
          </button>
          <span className="text-xl p-2">{productQuantity}</span>
          <button
            className="btn"
            onClick={(e) => {
              incrementProduct(e)
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  )
}

export default Product
