// The register for every item in the database, where you get the opportunity to go to a site for adding items to the database

import React, { useState } from 'react'

import Searchbar from '../components/Searchbar'
import ItemList from '../components/ItemList'
import NavButton from '../components/NavButton'
import FilterDropdown from '../components/FilterDropdown'
import { useQuery } from '@apollo/client'
import { SEARCH_PRODUCTS } from '../utils/queryFunctions/getProduct'

interface ItemRegisterProps {
  editable: boolean
}

interface Product {
  name: string;
}

function ItemRegister({ editable }: ItemRegisterProps) {
  const [filter, setFilter] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const categoryTranslations: { [key: string]: string } = {
    'Fruit & Vegetables': 'Frukt & grønt',
    'Fish & Seafood': 'Fisk & skalldyr',
    'Beverages' : 'Drikke',
    'Baked Goods and Biscuits': 'Bakvarer og kjeks',
    'Meat': 'Kjøtt',
    'Chicken & Poultry' : 'Kjylling og fjærkre',
    'Dairy & Eggs' : 'Meieri & egg',
    'Snacks & Sweets' : 'Snacks & godteri',
    'Cheese' :  'Ost',
    'Spread & Breakfast': 'Pålegg & frokost'
   }

   const handleCategoryChange = (category:string) => {
    const translatedCategory = categoryTranslations[category] || category
    setSelectedCategory(translatedCategory)
   }




  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: {  page: 1, perPage: 10, category: selectedCategory, name: filter },
  })
  
  let products: Product[] = data ? data.searchProducts : []



  // Map filtered items to objects that include all props
  // Define the itemPropsList based on the "editable" prop
  const itemPropsList = editable
    ? products.map((item) => ({
        itemName: item.name,
        increment: true,
        decrement: true,
        quantity: true,
      }))
    : products.map((item) => ({
        itemName: item.name,
        increment: false,
        decrement: false,
        quantity: false,
      }))

  return (
    <div className="h-full flex flex-col justify-center">
      {/* Render the Searchbar component with the filter callback */}
      <div className="grid sm:flex gap-4 bg-white">
        <Searchbar onFilter={(value: React.SetStateAction<string>) => setFilter(value)} />
        <FilterDropdown onCategoryChange={handleCategoryChange}/>
      </div>
      {/* Render the ItemList component with the extracted item names */}
      <div className="h-full overflow-y-scroll mt-4 mb-4">
        <ItemList items={itemPropsList} />
      </div>

      <div className="button-container flex justify-end mb-5">
        <NavButton route="/addItemToRegister" title={'Add item to register'} />
      </div>
    </div>
  )
}

export default ItemRegister