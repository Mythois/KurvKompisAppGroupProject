/* The home page of the application. */

import React, { useEffect, useState } from 'react';
import ListShoppingList from '../components/ListShoppingList';
import useWindowDimensions from '../utils/useWindowDimensions';
import { loadShoppingLists, saveShoppingLists } from '../utils/shoppingListStorage';
import ShoppingList from '../components/ShoppingList';

function Home() {
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
    console.log(shoppingLists);
    
  }

  function deleteShoppingList(idToDelete: number) {
    const updatedLists = shoppingLists.filter(
      (list, index) => index !== idToDelete
    ); // Filter out the shopping list to delete
    setShoppingLists(updatedLists); // Update the shopping lists state
    saveShoppingLists(updatedLists); // Save the updated shopping lists to storage
    console.log(shoppingLists);

  }

  const { width } = useWindowDimensions(); // Get the window width

  return (
    <div className='flex flex-row'>
      <div className='bg-green-100 flex-1'>
        <ListShoppingList
          shoppingLists={shoppingLists}
          onDeleteShoppingList={deleteShoppingList}
        />

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

      {width > 500 && (
        <div className='bg-green-400 flex-1'>
          {/* Content to be displayed when the window width is greater than 500 pixels */}
        </div>
      )}
    </div>
  );
}

export default Home;
