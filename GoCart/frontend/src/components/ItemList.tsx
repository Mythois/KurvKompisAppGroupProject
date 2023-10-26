// Functional component that renders a list of 'items'

import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; increment?: boolean; decrement?: boolean; quantity?: boolean }>
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="bg-white p-2 rounded-2xl ">
      {items.map((item, index) => (
        <div>
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
