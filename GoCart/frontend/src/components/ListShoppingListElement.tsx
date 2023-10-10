// ShoppingListElement component represents an ShoppingListElement in a ListShoppingList

import React from 'react';

interface ListShoppingListElementProps {
  listName: string;
  items: string[];
  onClick?: () => void;
}


function ListShoppingListElement ({ listName, items }: ListShoppingListElementProps ) {
  // If there are no items, display a message
  
 // If there are more than two items, display the first two and "..."
  const firstTwoItems = items.slice(0, 2);
  
  return (
    
    <div className="bg-white rounded-lg p-2 mb-4 mt-4 text-left  cursor-pointer border-white hover:border-green-700 border-2">

    <h3 className="text-lg font-semibold mb-2 ml-4">{listName}</h3>

      {items.length === 0 && (
        <div>
          {/* Display a message indicating there are no items in the list */}
          <p className="text-lg ml-4">This list is empty!</p>
        </div>
      )}

      {/* If there are items, display the first two */}
      {items.length > 0 && (
        <div>
          {/* Display a bullet list of the first two items */}
          <ul className="list-disc list-inside pl-4 ml-4">
            {firstTwoItems.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>

          {/* If there are more than two items, display "..." */}
          {items.length > 2 && <p className="text-lg ml-4">...</p>}
        </div>
      )}
    </div>
  );
}

export default ListShoppingListElement;
