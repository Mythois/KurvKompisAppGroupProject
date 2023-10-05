import React from 'react';

interface ItemProps {
    increment: boolean;
    decrement: boolean;
    quantity: boolean;
}
  
const Item: React.FC<ItemProps> = ({ increment, decrement, quantity }) => {
  return (
    <div>
      <p>Increment: {increment.toString()}</p>
      <p>Decrement: {decrement.toString()}</p>
      <p>Quantity: {quantity.toString()}</p>
    </div>
  );
};

export default Item;

