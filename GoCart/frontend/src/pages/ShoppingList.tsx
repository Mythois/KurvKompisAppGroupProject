// "ListeDetaljer" -> The site that shows details about the shoppinglist with the specific title you choose

import React from 'react'
import ItemList from '../components/ItemList'

// mock data just for visualizing the list
const items = [
    { itemName: 'Item 1', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 2', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 3', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 4', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 5', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 6', increment: true, decrement: true, quantity: true },
    { itemName: 'Item 7', increment: true, decrement: true, quantity: true }
    // Add more items as needed
  ];

interface ShoppingListProps {
    title: string;

}

function ShoppingList( {title}: ShoppingListProps ) {
    return (
        <div className='px-4 py-10 sm:w-2/3 m-auto md:w-1/2 xl:w-1/3'>
                <h1 className='mb-2 text-2xl font-light text-center'>{title}</h1>
                <ItemList items={items}/>
                <div className=' flex justify-center py-8'>
                    <button className='bg-white py-2 px-8 text-lg rounded-3xl border-green-700 border-2 hover:bg-green-700 hover:text-white'>Add item</button>
                </div>
        </div>
    )
}

export default ShoppingList