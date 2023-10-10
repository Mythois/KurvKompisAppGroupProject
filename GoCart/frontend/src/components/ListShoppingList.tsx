// Functional component that renders a list of 'ListShoppingListElements'

import ListShoppingListElement from './ListShoppingListElement';
import ShoppingList from './ShoppingList';
import { Link } from 'react-router-dom'; 

import { useState, useEffect } from 'react';

import { loadShoppingLists, saveShoppingLists } from '../utils/shoppingListStorage';


function ListShoppingList() {

  // State to store shopping lists and the title of a new list
  const [shoppingLists, setShoppingLists] = useState(loadShoppingLists());
  const [newListTitle, setNewListTitle] = useState('');

  useEffect(() => {
    // Load shopping lists from storage when the component mounts
    const loadedLists = loadShoppingLists();
    setShoppingLists(loadedLists);
  }, []);


  function createShoppingList() {
    if (newListTitle.trim() === '') {
      return;
    }

    const newList = { id: shoppingLists.length, title: newListTitle, items: [] }; // Use the length of shoppingLists as the ID
    setShoppingLists((prevLists) => [...prevLists, newList] as ShoppingList[]); // Update the shopping lists state
    saveShoppingLists([...shoppingLists, newList] as ShoppingList[]); // Save the updated shopping lists to storage
    setNewListTitle('');
    

  } 

  function displayShoppingList() {
    
  }

  function deleteShoppingList(idToDelete: number) {
    const updatedLists = shoppingLists.filter(
      (list, index) => index !== idToDelete
    ); // Filter out the shopping list to delete

    setShoppingLists(updatedLists); // Update the shopping lists state
    saveShoppingLists(updatedLists); // Save the updated shopping lists to storage
    
  }
  
  return (
    <div>
      <div className='bg-green-100 flex-1'>
      <div>
        {shoppingLists.map((shoppingList, index) => (
          <div key={index} className="relative hover:bg-green-700 cursor-pointer">
            <div>
              <Link to={'/ShoppingListPage'}>
                <ListShoppingListElement
                  listName={shoppingList.title}
                  items={shoppingList.items}
                  onClick={() => displayShoppingList()}
                  />
            </Link>

            </div>
              <button
                onClick={() => deleteShoppingList(index)}
                className="absolute top-5 right-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                Delete
              </button>
          </div>
        ))}
      </div>

        <div className='text-center'>
          <input
            type='text'
            placeholder='Enter title'
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
          />
          <button
            onClick={createShoppingList}
            className='bg-white py-2 px-4 text-lg rounded-3xl border-green-700 border-2 hover:bg-green-700 hover:text-white'
          >
            Create Shopping List
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListShoppingList

