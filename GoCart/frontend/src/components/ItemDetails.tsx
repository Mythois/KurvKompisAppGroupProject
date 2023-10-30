// ItemDetails Component: Displays details of a food item and allows for editing if specified (although the editable version is not fully implemented yet)

import React, { useState } from 'react'
import { Food, getFoodData } from '../utils/mockup/mockup' // Import the data service

interface ItemDetailsProps {
  itemName: string // The name of the food item to display
  editable?: boolean // Whether the component should be editable
}

function ItemDetails({ itemName, editable = false }: ItemDetailsProps) {
  // Get the food data from the data service
  const foodData = getFoodData()

  // Find the food item with the given name
  const foodItem = findFoodItem(foodData, itemName)

  // Function to find a food item by name
  function findFoodItem(data: { [key: string]: Food[] }, name: string): Food | undefined {
    for (const category in data) {
      const foods = data[category]
      const foundItem = foods.find((item) => item.name === name)
      if (foundItem) {
        return foundItem
      }
    }
    return undefined
  }

  const [editedItem, setEditedItem] = useState<Food | undefined>(foodItem)

  // Handle input changes for editable items
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }))
  }

  if (!foodItem) {
    return <div>Food item not found.</div>
  }

  return (
    <div className="flex justify-center">
      <div style={{ width: `60%` }} className="my-4 mx-auto p-6 bg-green-100 border border-green-200 rounded-lg">
        <h2 className="text-2xl  mb-2 pb-2 border-b border-green-200">Information</h2>
        {editable ? (
          // Render editable form for editing item details
          <ul>
            {Object.entries(editedItem || {}).map(([key, value]) => (
              <li key={key} className="mb-2">
                <strong>{key}: </strong>
                <input
                  type="text"
                  name={key}
                  value={String(value)}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-1"
                />
              </li>
            ))}
          </ul>
        ) : (
          // Render read-only view of item details
          <ul>
            {Object.entries(foodItem).map(([key, value]) => (
              <li key={key} className="mb-2">
                <strong>{key}: </strong>
                {String(value)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ItemDetails
