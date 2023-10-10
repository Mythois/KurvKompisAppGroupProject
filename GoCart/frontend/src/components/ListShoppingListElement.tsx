// ShoppingListElement component represents an ShoppingListElement in a ListShoppingList

import React from 'react';

interface ShoppingListElementProps {
  listName: string;
  items: string[];
  onClick?: () => void;
}

const ShoppingListElement: React.FC<ShoppingListElementProps> = ({ listName, items }) => {
  // If there are no items, display a message
  if (items.length === 0) {
    return (
      <div className="item bg-light-green-200 border border-green-200 rounded-lg p-2 mb-4 mt-4 text-left">
        <h3 className="text-lg font-semibold mb-2 ml-4">{listName}</h3>
        {/* Display a message indicating there are no items in the list */}
        <p className="text-lg ml-4">This list is empty!</p>
      </div>
    );
  }

  // If there are more than two items, display the first two and "..."
  const firstTwoItems = items.slice(0, 2);

  return (
    <div className="item bg-light-green-200 border border-green-200 rounded-lg p-2 mb-4 mt-4 text-left">
      {/* Display the list name as a header */}
      <h3 className="text-lg font-semibold mb-2 ml-4">{listName}</h3>
      {/* Display a bullet list the items */}
      <ul className="list-disc list-inside pl-4 ml-4">
        {/* Map and display the first two items in the list */}
        {firstTwoItems.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>
      {/* If there are more than two items, display "..." */}
      {items.length > 2 && <p className="text-lg ml-4">...</p>}
    </div>
  );
};

export default ShoppingListElement;
