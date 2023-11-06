import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react'

function FilterDropdown() {
  const [isFilterVisible, setFilterVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleFilterClick() {
    setFilterVisible(!isFilterVisible)
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className="flex">
      {!isFilterVisible && (
        // Filter button
        <button className="btn flex gap-2 text-xl sm:absolute" onClick={handleFilterClick}>
          <SlidersHorizontal size={30} color="white" />
          Filter
        </button>
      )}

      {isFilterVisible && (
        <div className="sm:gap-4 sm:absolute sm:w-max bg-white border-2 border-primary rounded-lg p-2 text-xl z-0">
          <div className=" flex cursor-pointer border-b-2 mb-2 text-2xl" onClick={handleFilterClick}>
            <X size={35} />
            Close
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
