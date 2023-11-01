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
        // Filter button
        <button className="btn flex gap-2 text-xl" onClick={handleFilterClick}>
          <SlidersHorizontal size={30} color="white" />
          Filter
        </button>
      )}

      {isFilterVisible && (
        <div className="border-2 border-primary rounded-lg p-2 text-xl">
          <div className="flex cursor-pointer border-b-2" onClick={handleFilterClick}>
            <X size={25} className="" />
            Close
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
