// Functional component that renders a list of 'items'

import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; itemID: string, increment?: boolean; decrement?: boolean; quantity?: boolean }>
  listView: Boolean
}

function ItemList({ items, listView }: ItemListProps) {
  return (
    // Render the items in a grid based on the listView prop
    <div
      className={`grid bg-white rounded-2xl ${
        listView ? 'grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }`}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          itemName={item.itemName}
          itemID={item.itemID}
          increment={item.increment}
          decrement={item.decrement}
          quantity={item.quantity}
        />
      ))}
    </div>
  )
}

export default ItemList
