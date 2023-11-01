// Functional component that renders a list of 'ListShoppingListElements'

import ListShoppingListElement from './ListShoppingListElement'
import ShoppingList from './ShoppingList'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { loadShoppingLists, saveShoppingLists } from '../utils/shoppingListStorage'

function ListShoppingList() {
  // State to store shopping lists and the title of a new list
  const [shoppingLists, setShoppingLists] = useState(loadShoppingLists())
  const [newListTitle, setNewListTitle] = useState('')

  useEffect(() => {
    // Load shopping lists from storage when the component mounts
    const loadedLists = loadShoppingLists()
    setShoppingLists(loadedLists)
  }, [])

  function createShoppingList() {
    if (newListTitle.trim() === '') {
      return
    }

    const newList = { id: shoppingLists.length, title: newListTitle, items: [] } // Use the length of shoppingLists as the ID
    setShoppingLists((prevLists) => [...prevLists, newList] as ShoppingList[]) // Update the shopping lists state
    saveShoppingLists([...shoppingLists, newList] as ShoppingList[]) // Save the updated shopping lists to storage
    setNewListTitle('')
  }

  function deleteShoppingList(idToDelete: number) {
    const updatedLists = shoppingLists.filter((list, index) => index !== idToDelete) // Filter out the shopping list to delete

    setShoppingLists(updatedLists) // Update the shopping lists state
    saveShoppingLists(updatedLists) // Save the updated shopping lists to storage
  }

  return (
    <div>
      <div className="flex-1 ">
        <div>
          {shoppingLists.map((shoppingList, index) => (
            <div key={index} className="card flex justify-between">
              <div>
                <Link to={`/ShoppingListPage/${index}`}>
                  <ListShoppingListElement listName={shoppingList.title} items={shoppingList.items} />
                </Link>
              </div>
              <div className=" flex flex-col justify-end">
                <button onClick={() => deleteShoppingList(index)} className="btn text-xs h-9">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <input
            className="inputfield border-input
            placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 ;"
            type="text"
            placeholder="Enter title"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <button
            onClick={createShoppingList}
            className="btn text-lg ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors 
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-200 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 "
          >
            Create Shopping List
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListShoppingList
