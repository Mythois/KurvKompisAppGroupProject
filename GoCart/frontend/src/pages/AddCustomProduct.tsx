// "Add product" -> The site where you get the opportunity to add products to the register, containing the product info you wish
import { useState } from 'react'
import ConfirmationModal from '../components/ConfirmationModal'
import { Link } from 'react-router-dom'

function AddCustomProduct() {
  const [showCategories, setShowCategories] = useState(false)
  const [showNutrition, setShowNutrition] = useState(false)
  const [showOther, setShowOther] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function toggleInput(inputType: string) {
    setShowCategories(inputType === 'categories')
    setShowNutrition(inputType === 'nutrition')
    setShowOther(inputType === 'other')
  }

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
    // Show the modal after adding the product
    setShowModal(true)

    // Close the input fields
    setShowCategories(false)
    setShowNutrition(false)
    setShowOther(false)

    // Set a timeout to close the modal after 3 seconds
    setTimeout(() => {
      setShowModal(false)
    }, 3000)
  }

  return (
    <div className="pt-4 sm:pt-8 contentCenter">
      <h1 className="text-2xl">Add product to database</h1>
      <div className="grid gap-1 my-2 mb-4">
        {/* name input */}
        <input
          type="text"
          placeholder="Product name*"
          className="inputfield mb-4"
          value={productInfo.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
        />

        {/* product info input */}
        <div className="grid gap-2 ">
          {/* categories input */}
          <button
            className={`text-left ${showCategories ? 'addCategoryClicked' : 'addCategory'}`}
            onClick={() => {
              toggleInput('categories')
              setShowCategories(!showCategories)
            }}
          >
            {showCategories ? ' - ' : ' + '}
            Add categories
          </button>
          <div>
            {showCategories && (
              <div className="grid grid-cols-2 gap-2 mb-4 mt-1">
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
            )}
          </div>

          {/* nutrition input */}
          <button
            className={`text-left ${showNutrition ? 'addCategoryClicked' : 'addCategory'}`}
            onClick={() => {
              toggleInput('nutrition')
              setShowNutrition(!showNutrition)
            }}
          >
            {showNutrition ? ' - ' : ' + '}
            Add nutrition
          </button>
          <div>
            {showNutrition && (
              <div className="grid grid-cols-2 gap-2 mb-4 mt-1">
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
            )}
          </div>

          {/* ... other input fields */}

          <button
            className={`text-left ${showOther ? 'addCategoryClicked' : 'addCategory'}`}
            onClick={() => {
              toggleInput('other')
              setShowOther(!showOther)
            }}
          >
            {showOther ? ' - ' : ' + '}
            Add other info
          </button>
          <div>
            {showOther && (
              <div className="grid grid-cols-2 gap-2 mt-1">
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
                  placeholder="Additional information"
                  className="textarea col-span-2"
                  value={productInfo.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        {/* add product button */}
        <button className="btn" onClick={handleAddItem}>
          Add Product
        </button>
        <button className="btn">
          <Link to="/ProductsPage">Back to products</Link>
        </button>
      </div>
      <div className="my-2">
        {/* Render the modal if showModal is true */}
        {showModal && <ConfirmationModal productName={productInfo.name} />}
      </div>
    </div>
  )
}

export default AddCustomProduct
