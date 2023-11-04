import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { SlidersHorizontal } from 'lucide-react'

function ItemFilters() {
  const [isFilterVisible, setFilterVisible] = useState(false)

  function handleFilterClick() {
    setFilterVisible(!isFilterVisible)
  }

  useEffect(() => {
    function handleResize() {
      setFilterVisible(window.innerWidth > 640) // hide filter on small screens
    }

    window.addEventListener('resize', handleResize) // Add event listener to handle window resize

    handleResize() // Call the handleResize function once on initial render

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array ensures the effect runs once after the initial render

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
        <div className=" sm:flex sm:gap-4 sm:border-none border-2 border-primary rounded-lg p-2 text-xl">
          <div className=" sm:hidden flex cursor-pointer border-b-2 text-2xl" onClick={handleFilterClick}>
            <X size={35} />
            Close
          </div>

          {/* Checkboxes */}
          <div className="text-2xl grid grid-cols-2 lg:flex lg:gap-6">
            <div>
              <input type="checkbox" className="checkbox" />
              <label>Fruit</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <label>Vegetables</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <label>Fish</label>
            </div>
            <div>
              <input type="checkbox" className="checkbox" />
              <label>Meat</label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemFilters
