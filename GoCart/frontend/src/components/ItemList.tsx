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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white p-2 rounded-2xl ">
      {items.map((item, index) => (
        <div className="card mx-2">
          <Link to={`/ItemDetailsPage/${item.itemName}`}>
            <Item
              key={index}
              itemName={item.itemName}
              increment={item.increment}
              decrement={item.decrement}
              quantity={item.quantity}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ItemList
