// ItemList.tsx
import React from 'react';
import Item from './Item';

// Define the props for the ItemList component
interface ItemListProps {
  items: Array<{ itemName: string; increment?: boolean; decrement?: boolean; quantity?: boolean }>;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          itemName={item.itemName}
          increment={item.increment}
          decrement={item.decrement}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default ItemList;
