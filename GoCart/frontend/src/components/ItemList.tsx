// Functional component that renders a list of 'items'

import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; increment?: boolean; decrement?: boolean; quantity?: boolean }>
  listView: Boolean
}

function ItemList({ items, listView }: ItemListProps) {
  return (
    // Render the items in a grid based on the listView prop
    <div
      className={`grid bg-white rounded-2xl ${
        listView ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }`}
    >
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
