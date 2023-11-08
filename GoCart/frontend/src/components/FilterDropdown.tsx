import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react'
import { RotateCcw } from 'lucide-react'

type FilterDropdownProps = {
  onCategoryChange: (category: string) => void
}

function FilterDropdown({ onCategoryChange }: FilterDropdownProps) {
  const [isFilterVisible, setFilterVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  function handleFilterClick() {
    setFilterVisible(!isFilterVisible)
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    const category = event.target.value
    setSelectedCategory(event.target.value)

    // Call the callback function to pass the selected category to the parent component
    onCategoryChange(category)
  }

  function handleResetClick() {
    setSelectedCategory(null) // Reset selected category to null
    onCategoryChange('') // Notify the parent component about the reset (passing null)
  }

  return (
    <div className="flex">
      {!isFilterVisible && (
        // Filter button
        <button className="btn flex gap-2 text-xl" onClick={handleFilterClick}>
          <SlidersHorizontal size={30} />
          Filter
        </button>
      )}

      {isFilterVisible && (
        <div className="sm:gap-4 absolute w-max bg-white border-2 border-primary rounded-lg p-2 text-xl z-0">
          <div className="flex justify-between mb-4">
            <button className="btn flex gap-1" onClick={handleFilterClick}>
              <X size={30} />
              Close
            </button>
            <button className="btn flex gap-1" onClick={handleResetClick}>
              <RotateCcw size={30} />
              Reset
            </button>
          </div>

          {/* Checkboxes */}
          <div className="text-2xl grid grid-cols-1 xl:grid-cols-2">
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Fruit & Vegetables"
                checked={selectedCategory === 'Fruit & Vegetables'}
                onChange={handleCategoryChange}
              />
              <label>Fruit & Vegetables</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Fish & Seafood"
                checked={selectedCategory === 'Fish & Seafood'}
                onChange={handleCategoryChange}
              />
              <label>Fish & Seafood</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Beverages"
                checked={selectedCategory === 'Beverages'}
                onChange={handleCategoryChange}
              />
              <label>Beverages</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Baked Goods and Biscuits"
                checked={selectedCategory === 'Baked Goods and Biscuits'}
                onChange={handleCategoryChange}
              />
              <label>Baked Goods and Biscuits</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Meat"
                checked={selectedCategory === 'Meat'}
                onChange={handleCategoryChange}
              />
              <label>Meat</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Chicken & Poultry"
                checked={selectedCategory === 'Chicken & Poultry'}
                onChange={handleCategoryChange}
              />
              <label>Chicken & Poultry</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Dairy & Eggs"
                checked={selectedCategory === 'Dairy & Eggs'}
                onChange={handleCategoryChange}
              />
              <label>Dairy & Eggs</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Snacks & Sweets"
                checked={selectedCategory === 'Snacks & Sweets'}
                onChange={handleCategoryChange}
              />
              <label>Snacks & Sweets</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Cheese"
                checked={selectedCategory === 'Cheese'}
                onChange={handleCategoryChange}
              />
              <label>Cheese</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio"
                name="category"
                value="Spread & Breakfast"
                checked={selectedCategory === 'Spread & Breakfast'}
                onChange={handleCategoryChange}
              />
              <label>Spread & Breakfast</label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
