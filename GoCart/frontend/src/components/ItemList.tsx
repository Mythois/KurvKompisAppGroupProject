// Functional component that renders a list of 'items'

import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; increment?: boolean; decrement?: boolean; quantity?: boolean }>
}

function ItemList({ items }: ItemListProps) {
  return (
    <div className="grid bg-white rounded-2xl ">
      {items.map((item, index) => (
        <Item
          key={index}
          itemName={item.itemName}
          increment={item.increment}
          decrement={item.decrement}
          quantity={item.quantity}
        />
      ))}
    </div>
  )
}

export default ItemList
