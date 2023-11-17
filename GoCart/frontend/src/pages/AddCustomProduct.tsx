// "Add product" -> The site where you get the opportunity to add products to the register, containing the product info you wish

interface InputField {
  label: string
  stateKey: string
  type: string
  value: string
}
import React, { useState } from 'react'

function AddCustomProduct() {
  const [productInfo, setProductInfo] = useState({
    name: '',
    category1: '',
    category2: '',
    category3: '',
    category4: '',
    calories: '',
    fat: '',
    carbohydrates: '',
    proteins: '',
    salt: '',
    sugar: '',
    store: '',
    brand: '',
    additionalInfo: '',
  })

  function handleInputChange(key: string, value: string) {
    setProductInfo((info) => ({ ...info, [key]: value }))
  }

  function handleAddItem() {
    // Here you can handle adding the item to the register with the productInfo state.
    // For example, you can send a request to your backend API to save the product.
    // Add your logic to save the product to the register here
    console.log('Product Info:', productInfo)
  }

  return (
    <div className="pt-8 contentCenter">
      <h1 className="text-2xl">Add product to database</h1>
      <div className="grid gap-2 my-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="inputfield mb-4"
          value={productInfo.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
        />

        {/* categories input */}
        <h2 className="text-xl">Categories</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <input
            type="text"
            placeholder="Category 1"
            className="inputfield"
            value={productInfo.category1}
            onChange={(e) => handleInputChange('category1', e.target.value)}
          />
          <input
            type="text"
            placeholder="Category 2"
            className="inputfield"
            value={productInfo.category2}
            onChange={(e) => handleInputChange('category2', e.target.value)}
          />
          <input
            type="text"
            placeholder="Category 3"
            className="inputfield"
            value={productInfo.category3}
            onChange={(e) => handleInputChange('category3', e.target.value)}
          />
          <input
            type="text"
            placeholder="Category 4"
            className="inputfield"
            value={productInfo.category4}
            onChange={(e) => handleInputChange('category4', e.target.value)}
          />
        </div>

        {/* nutrition input */}
        <h2 className="text-xl">Nutrition</h2>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <input
            type="number"
            placeholder="Calories (per 100g)"
            className="inputfield"
            value={productInfo.calories}
            onChange={(e) => handleInputChange('calories', e.target.value)}
            min="0"
          />
          <input
            type="number"
            placeholder="Fat (per 100g)"
            className="inputfield"
            value={productInfo.fat}
            onChange={(e) => handleInputChange('fat', e.target.value)}
            min="0"
          />
          <input
            type="number"
            placeholder="Carbohydrates (per 100g)"
            className="inputfield"
            value={productInfo.carbohydrates}
            onChange={(e) => handleInputChange('carbohydrates', e.target.value)}
            min="0"
          />
          <input
            type="number"
            placeholder="Proteins (per 100g)"
            className="inputfield"
            value={productInfo.proteins}
            onChange={(e) => handleInputChange('proteins', e.target.value)}
            min="0"
          />
          <input
            type="number"
            placeholder="Salt (per 100g)"
            className="inputfield"
            value={productInfo.salt}
            onChange={(e) => handleInputChange('salt', e.target.value)}
            min="0"
          />
          <input
            type="number"
            placeholder="Sugar (per 100g)"
            className="inputfield"
            value={productInfo.sugar}
            onChange={(e) => handleInputChange('sugar', e.target.value)}
            min="0"
          />
        </div>

        {/* ... other input fields */}
        <h2 className="text-xl">Other information</h2>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Store"
            className="inputfield"
            value={productInfo.store}
            onChange={(e) => handleInputChange('store', e.target.value)}
          />
          <input
            type="text"
            placeholder="Brand"
            className="inputfield"
            value={productInfo.brand}
            onChange={(e) => handleInputChange('brand', e.target.value)}
          />
          <textarea
            placeholder="Additional Info"
            className="textarea col-span-2"
            value={productInfo.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
          />
        </div>
      </div>
      <button className="btn" onClick={handleAddItem}>
        Add Product
      </button>
    </div>
  )
}

export default AddCustomProduct
