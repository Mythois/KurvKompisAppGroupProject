// The register for every item in the database, where you get the opportunity to go to a site for adding items to the database

import React, { useState, useEffect } from 'react'
import { getFoodData, Food } from '../utils/mockup/mockup'
import Searchbar from '../components/Searchbar'
import ItemList from '../components/ItemList'
import NavButton from '../components/NavButton'
import FilterDropdown from '../components/FilterDropdown'
import SortButtons from '../components/SortButtons'
import { MoveLeft } from 'lucide-react'
import { MoveRight } from 'lucide-react'
import ArrowButton from '../components/ArrowButton'

interface ItemRegisterProps {
  editable: boolean
}

function ItemRegister({ editable }: ItemRegisterProps) {
  const [filter, setFilter] = useState('')
  const [foodData, setFoodData] = useState<Food[]>([])

  useEffect(() => {
    // Fetch the data from mockup once when the component mounts
    const data = getFoodData()
    // Convert the object to an array of Food[]
    const foodArray: Food[] = Object.values(data).flatMap((items) => items)
    setFoodData(foodArray)
  }, [])

  // Filter the food items based on the search query
  const filteredItems = foodData.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))

  // Map filtered items to objects that include all props
  // Define the itemPropsList based on the "editable" prop
  const itemPropsList = editable
    ? filteredItems.map((item) => ({
        itemName: item.name,
        increment: true,
        decrement: true,
        quantity: true,
      }))
    : filteredItems.map((item) => ({
        itemName: item.name,
        increment: false,
        decrement: false,
        quantity: false,
      }))

  return (
    <div className="h-full flex flex-col justify-center">
      {/* Render the Searchbar component with the filter callback */}
      <div className="grid sm:flex gap-2 bg-white mb-2">
        <Searchbar onFilter={(value: React.SetStateAction<string>) => setFilter(value)} />
        <div className="flex justify-between gap-2">
          <FilterDropdown />
          <SortButtons />
        </div>
      </div>
      {/* Render the ItemList component with the extracted item names */}
      <div className="h-full overflow-y-scroll mt-4 mb-4">
        <ItemList listView={false} items={itemPropsList} />
      </div>

      <div className="flex justify-between gap-2 mb-5">
        <div className="justify-start">
          <ArrowButton direction="left" index={0} />
        </div>
        <div className="justify-center">
          <NavButton route="/addItemToRegister" title={'Add item to register'} />
        </div>
        <div className=" justify-end">
          <ArrowButton direction="right" index={0} />
        </div>
      </div>
    </div>
  )
}

export default ItemRegister
