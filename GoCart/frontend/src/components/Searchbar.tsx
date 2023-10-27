// Searchbar component: A reusable input field for filtering items.
// Using the same searchbar component as in project_1

import React, { useState } from 'react';

interface SearchbarProps {
  // Callback function that will be called when the filter value changes.
  onFilter: (value: string) => void;
}

// Define the Searchbar component as a functional component.
export const Searchbar: React.FC<SearchbarProps> = ({ onFilter }) => {
  // Initialize the 'filter' state using React's useState hook.
  const [filter, setFilter] = useState("");

  // Function to handle changes in the filter input field.
  const handleFilterChange = (value: string) => {
    // Update the 'filter' state with the new value.
    setFilter(value);
    
    // Call the 'onFilter' callback function to notify the parent component of the filter change.
    onFilter(value);
  };

  return (
    <div>
      {/* Input field for filtering with controlled value */}
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        // The onChange event handler is used to call the handleFilterChange function when the input value changes.
        onChange={(e) => handleFilterChange(e.target.value)}
        className="inputfield border-input
        placeholder:text-muted-foreground 
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
      />
    </div>
  );
};
