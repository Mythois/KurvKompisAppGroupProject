// "Add product" -> The site where you get the opportunity to add products to the register, containing the product info you wish
import { useState } from 'react'
import ConfirmationModal from '../components/ConfirmationModal'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_CUSTOM_PRODUCT } from '../utils/mutationFunctions/addCustomProduct'
import { MoveLeft } from 'lucide-react'

function AddCustomProduct() {
  // State variables to toggle the input fields
  const [showCategories, setShowCategories] = useState(false)
  const [showNutrition, setShowNutrition] = useState(false)
  const [showOther, setShowOther] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Mutation function to add a custom product to the database
  const [addCustomProduct, { data, loading, error }] = useMutation(ADD_CUSTOM_PRODUCT)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  // Function to toggle the input fields
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

  async function handleAddItem() {
    try {
      const { data } = await addCustomProduct({
        variables: {
          input: {
            name: productInfo.name,
            category: [
              { name: productInfo.category1 },
              { name: productInfo.category2 },
              { name: productInfo.category3 },
              { name: productInfo.category4 },
            ],
            nutrition: [
              { display_name: 'calories', amount: parseFloat(productInfo.calories), unit: 'kcal' },
              { display_name: 'fat', amount: parseFloat(productInfo.fat), unit: 'g' },
              { display_name: 'carbohydrates', amount: parseFloat(productInfo.carbohydrates), unit: 'g' },
              { display_name: 'proteins', amount: parseFloat(productInfo.proteins), unit: 'g' },
              { display_name: 'salt', amount: parseFloat(productInfo.salt), unit: 'g' },
              { display_name: 'sugar', amount: parseFloat(productInfo.sugar), unit: 'g' },
            ],
            store: { name: productInfo.store },
            brand: productInfo.brand,
            description: productInfo.additionalInfo,
          },
        },
      })

      // Mutation completed successfully
      console.log(productInfo) // Check the actual response data

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
    } catch (error) {
      console.error('Error adding custom product:', error)
    }
  }

  return (
    <div className="pt-4 sm:pt-8 contentCenter">
      <h1 className="text-2xl">Add product to database</h1>

      <div className="grid gap-1 my-2 mb-4">
        <form>
          <input
            type="text"
            placeholder="Product name*"
            className="inputfield mb-4"
            value={productInfo.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </form>

        <div className="grid gap-2">
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
              <form className="grid grid-cols-2 gap-2 mb-4 mt-1">
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
              </form>
            )}
          </div>
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
              <form className="grid grid-cols-2 gap-2 mb-4 mt-1">
                <input
                  type="number"
                  placeholder="Kcal (per 100g)"
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
              </form>
            )}
          </div>

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
              <form className="grid grid-cols-2 gap-2 mt-1">
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
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        {/* Back to products button */}
        <button className="btn">
          <Link to="/ProductsPage">
            <div className="flex gap-1">
              <MoveLeft />
              Back to products
            </div>
          </Link>
        </button>

        {/* Add Product button */}
        <button type="submit" className="btn" onClick={handleAddItem}>
          + Add product
        </button>
      </div>

      <div>
        <div className="my-2">
          {/* Render the modal if showModal is true */}
          {showModal && <ConfirmationModal productName={productInfo.name} />}
        </div>
      </div>
    </div>
  )
}

export default AddCustomProduct
