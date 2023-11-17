// "Add product" -> The site where you get the opportunity to add products to the register, containing the product info you wish

import { useState } from 'react'

interface InputField {
  label: string
  stateKey: string
  type: string
  value: string
}

function AddCustomProduct() {
  const initialInputFields: InputField[] = [
    { label: 'Product name', stateKey: 'productName', type: 'text', value: '' },
    { label: 'Product categories', stateKey: 'productCategories', type: 'text', value: '' },
    { label: 'Nutrition ', stateKey: 'productCategories', type: 'text', value: '' },
    { label: 'Description', stateKey: 'description', type: 'textarea', value: '' },
    // Add more input fields as needed
  ]

  const [inputFields, setInputFields] = useState(initialInputFields)

  function handleInputChange(key: string, value: string) {
    setInputFields((fields) => fields.map((field) => (field.stateKey === key ? { ...field, value } : field)))
  }

  function handleAddItem() {
    // Here you can handle adding the item to the register with the itemInfo state.
    // For example, you can send a request to your backend API to save the item.
    // Add your logic to save the item to the register here
  }
  return (
    <div>
      <h1 className="text-2xl">Add product to database</h1>
      <div className="grid gap-2 my-2">
        {inputFields.map((field) => (
          <div key={field.stateKey}>
            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.label}
                value={field.value}
                maxLength={250}
                onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
                className="textarea resize-none"
              />
            ) : (
              <input
                type={field.type}
                placeholder={field.label}
                value={field.value}
                onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
                className="inputfield"
              />
            )}
          </div>
        ))}
      </div>
      <button className="btn" onClick={handleAddItem}>
        Add Product
      </button>
    </div>
  )
}

export default AddCustomProduct
