// Item component represents an item in an ItemList
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// It accepts props for item name, increment, decrement, and quantity
interface ItemProps {
  itemName: string // The name or description of the item
  increment?: boolean // Whether to display the increment button
  decrement?: boolean // Whether to display the decrement button
  quantity?: boolean // Whether to display the quantity field
}

function Item({ increment, decrement, quantity, itemName }: ItemProps) {
  const [itemQuantity, setItemQuantity] = useState<number>(0)

  // Function to increment the item quantity
  function incrementItem() {
    setItemQuantity(itemQuantity + 1)
  }

  // Function to decrement the item quantity
  function decrementItem() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1)
    }
  }

  return (
    <div className="card flex justify-between gap-2">
      {/* Display the item name based on 'itemName' prop */}
      <Link to={`/ItemDetailsPage/${itemName}`} className="text-lg font-semibold col-span-2">
        {itemName}
      </Link>

      {/* Display the buttons if props is true */}
      {decrement && quantity && increment && (
        <div className="flex h-max">
          <button className="btn" onClick={decrementItem}>
            -
          </button>
          <span className="text-xl p-2">{itemQuantity}</span>
          <button className="btn" onClick={incrementItem}>
            +
          </button>
        </div>
      )}
    </div>
  )
}

export default Item
