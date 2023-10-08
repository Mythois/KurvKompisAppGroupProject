// Functional component that renders a list of 'ShoppingListElements'

import React from 'react';
import ShoppingListElement from './ShoppingListElement';

// Define the props for the ListShoppingList component
interface ListShoppingListProps {
  shoppingLists: Array<{ listName: string; items: string[] }>;
}

const ListShoppingList: React.FC<ListShoppingListProps> = ({ shoppingLists }) => {
  return (
    <div>
      {shoppingLists.map((shoppingList, index) => (
        <ShoppingListElement
          key={index}
          listName={shoppingList.listName}
          items={shoppingList.items}
        />
      ))}
    </div>
  );
};

export default ListShoppingList;
