// Functional component that renders a list of 'ShoppingListElements'

import React from 'react';
import ShoppingListElement from './ShoppingListElement';
import ShoppingList from './ShoppingList';

interface ListShoppingListProps {
  shoppingLists: ShoppingList[];
  onDeleteShoppingList: (index: number) => void;
}

const ListShoppingList: React.FC<ListShoppingListProps> = ({
  shoppingLists,
  onDeleteShoppingList,
}) => {
  return (
    <div>
      {shoppingLists.map((shoppingList, index) => (
        <div key={index} className="relative">
          <ShoppingListElement
            listName={shoppingList.title}
            items={shoppingList.items}
          />
          <button
            onClick={() => onDeleteShoppingList(index)}
            className="absolute top-5 right-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListShoppingList;
