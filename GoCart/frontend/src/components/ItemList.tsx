// Functional component that renders a list of 'items'

import React from 'react';
import Item from './Item';

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; increment?: boolean; decrement?: boolean; quantity?: boolean }>;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white p-2 rounded-2xl '>
      {items.map((item, index) => (
        <div className='card mx-2'>
        <Item
          key={index}
          itemName={item.itemName}
          increment={item.increment}
          decrement={item.decrement}
          quantity={item.quantity}
        />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
