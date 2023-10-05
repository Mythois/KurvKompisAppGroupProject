import React from 'react';

interface ArrowButtonProps {
    direction: string;
}
  
const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  return (
    <div>
      <p>Direction: {direction}</p>
    </div>
  );
};

export default ArrowButton;

