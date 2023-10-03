// Including the props: text or img, route and function

import React from 'react';

interface NavButtonProps {
    visual: string | HTMLImageElement;
    route: string;
    onClick: () => void;
}
  
const ArrowButton: React.FC<NavButtonProps> = ({ visual, route, onClick }) => {
  return (
    <div>
      {typeof visual === 'string' ? (
        <p>{visual}</p>
      ) : (
        <img src={visual.src} alt={visual.alt} />
      )}
      <p>Route: {route}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default ArrowButton;

