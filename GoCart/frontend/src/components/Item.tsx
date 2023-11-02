// Item component represents an item in an ItemList
import React, { useState } from 'react'

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
    <div className="item">
      {/* Display the item name based on 'itemName' prop */}

      <span className="text-lg font-semibold">{itemName}</span>

      <div className="flex items-center">
        {/* Display the decrement button if 'decrement' prop is true */}
        {decrement && (
          <button className="btn px-2 mr-1" onClick={decrementItem}>
            -
          </button>
        )}

        {/* Conditionally render the quantity span based on 'quantity' prop */}
        {quantity && <span className="text-lg px-2">{itemQuantity}</span>}

        {/* Display the increment button if 'increment' prop is true */}
        {increment && (
          <button className="btn px-2 ml-1" onClick={incrementItem}>
            +
          </button>
        )}
      </div>
    </div>
  )
}

export default Item
