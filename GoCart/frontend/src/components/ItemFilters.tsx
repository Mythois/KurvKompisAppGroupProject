import React, { useState } from 'react'
import { X } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react'

function ItemFilters() {
  const [isFilterVisible, setFilterVisible] = useState(false)

  const handleFilterClick = () => {
    setFilterVisible(!isFilterVisible)
  }

  return (
    <div>
      {!isFilterVisible && (
        <div className="bg-primary rounded-2xl p-3 flex gap-2 cursor-pointer text-white" onClick={handleFilterClick}>
          <SlidersHorizontal size={24} color="white" />
          <p>Filter</p>
        </div>
      )}

      {isFilterVisible && (
        <div className="border-2 border-primary rounded-2xl p-3">
          <div className="flex cursor-pointer border-b-2" onClick={handleFilterClick}>
            <X size={25} className="" />
            <p>Close</p>
          </div>
          {/* Render your filter options here */}
          <div>
            <input type="checkbox" />
            <label>Fruit</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Vegetables</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Fish</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Meat</label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemFilters
