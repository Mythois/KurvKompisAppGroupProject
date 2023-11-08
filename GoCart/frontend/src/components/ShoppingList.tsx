// "ListeDetaljer" -> The site that shows details about the shoppinglist with the specific title you choose

import React from 'react'
import ItemList from './ItemList'
import { Link } from 'react-router-dom'

// mock data just for visualizing the list
const mockiItems = [
  { itemName: 'Item 1', increment: true, decrement: true, quantity: true, itemID: '1' },
  { itemName: 'Item 2', increment: true, decrement: true, quantity: true, itemID: '2' },
  { itemName: 'Item 3', increment: true, decrement: true, quantity: true, itemID: '3' },
  { itemName: 'Item 4', increment: true, decrement: true, quantity: true, itemID: '4' },
  { itemName: 'Item 5', increment: true, decrement: true, quantity: true, itemID: '5' },
  { itemName: 'Item 6', increment: true, decrement: true, quantity: true, itemID: '6' },
  { itemName: 'Item 7', increment: true, decrement: true, quantity: true, itemID: '7' },
  // Add more items as needed
]

interface ShoppingListProps {
  title: string
  items: string[]
  id: string
}

function ShoppingList({ title, id, items }: ShoppingListProps) {
  return (
    <div className="">
      <h1 className="mb-2 text-2xl font-bold uppercase text-center">{title}</h1>
      <ItemList listView={true} items={mockiItems} />
      <div className=" flex justify-center py-8">
        <Link to={'/AddItem'}>
          <button className="btn">Add item</button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingList
