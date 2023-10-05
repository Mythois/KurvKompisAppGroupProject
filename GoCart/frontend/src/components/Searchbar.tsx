import React, { useState } from 'react';

interface SearchbarProps {
  onFilter: (value: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value: string) => {
    setFilter(value);
    onFilter(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-black"
      />
    </div>
  );
};
