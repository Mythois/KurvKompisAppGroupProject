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
    <div className="flex-1 h-full">
      {/* Input field to create a new shopping list */}
      <div className="grid gap-2 mb-4 lg:flex lg:justify-between">
        <input
          className="inputfield lg:w-2/3"
          type="text"
          placeholder="Enter title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <button onClick={createShoppingList} className="btn w-max m-auto ">
          Create Shopping List
        </button>
      </div>

      {/* List container  */}
      <div className="h-full overflow-y-scroll">
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
    </div>
  )
}

export default ListShoppingList
