// Item component represents an item in an ItemList

import React, { useState } from 'react';

// It accepts props for item name, increment, decrement, and quantity
interface ItemProps {
  itemName: string;     // The name or description of the item
  increment?: boolean;  // Whether to display the increment button
  decrement?: boolean;  // Whether to display the decrement button
  quantity?: boolean;   // Whether to display the quantity field
}

const Item: React.FC<ItemProps> = ({ increment, decrement, quantity, itemName }) => {
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  // Function to increment the item quantity
  const incrementItem = () => {
    setItemQuantity(itemQuantity + 1);
  };

  // Function to decrement the item quantity
  const decrementItem = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <div className="item bg-light-green-200 pt-2 flex justify-between items-center border-b border-gray-200">
      {/* Display the item name based on 'itemName' prop */}
  
      <span className="text-lg font-semibold">{itemName}</span>
  
      <div className="flex items-center">
        {/* Display the decrement button if 'decrement' prop is true */}
        {decrement && (
          <button className="px-3 py-1 bg-red-500 rounded-md" onClick={decrementItem}>-</button>
          )}

        {/* Conditionally render the quantity span based on 'quantity' prop */}
        {quantity && (
          <span className="text-lg px-2">{itemQuantity}</span>
        )}

        {/* Display the increment button if 'increment' prop is true */}
        {increment && (
          <button className="px-3 py-1 bg-green-700 rounded-md" onClick={incrementItem}>+</button>
        )}
      </div>
    </div>
  );
};

export default Item;
