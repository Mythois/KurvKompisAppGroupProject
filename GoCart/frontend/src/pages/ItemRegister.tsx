// The register for every item in the database, where you get the opportunity to go to a site for adding items to the database

import React, { useState } from 'react'

import Searchbar from '../components/Searchbar'
import ItemList from '../components/ItemList'
import NavButton from '../components/NavButton'
import FilterDropdown from '../components/FilterDropdown'
import { useQuery } from '@apollo/client'
import { SEARCH_PRODUCTS } from '../utils/queryFunctions/getProduct'
import SortButtons from '../components/SortButtons'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface ItemRegisterProps {
  editable: boolean
}

interface Product {
  name: string
}

function ItemRegister({ editable }: ItemRegisterProps) {
  const [filter, setFilter] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [perPage, setPerPage] = useState(40) // initial value is 40

  const categoryTranslations: { [key: string]: string } = {
    'Fruit & Vegetables': 'Frukt & grønt',
    'Fish & Seafood': 'Fisk & skalldyr',
    Beverages: 'Drikke',
    'Baked Goods and Biscuits': 'Bakevarer og kjeks',
    Meat: 'Kjøtt',
    'Chicken & Poultry': 'Kylling og fjærkre',
    'Dairy & Eggs': 'Meieri & egg',
    'Snacks & Sweets': 'Snacks & godteri',
    Cheese: 'Ost',
    'Spread & Breakfast': 'Pålegg & frokost',
  }

  const handleCategoryChange = (category: string) => {
    const translatedCategory = categoryTranslations[category] || category
    setSelectedCategory(translatedCategory)
  }

  const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
    variables: { page: 1, perPage: perPage, category: selectedCategory, name: filter },
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
    <div className="h-full flex flex-col justify-center sm:p-2 lg:pl-8 lg:pr-8">
      {/* Render the Searchbar component with the filter callback */}
      <div className="grid sm:flex gap-2 bg-white mb-2">
        <Searchbar onFilter={(value: React.SetStateAction<string>) => setFilter(value)} />
        <div className="flex justify-between gap-2">
          <FilterDropdown onCategoryChange={handleCategoryChange} />
          <SortButtons />
        </div>
      </div>
      {/* Render the ItemList component with the extracted item names */}
      <div className="h-full overflow-y-scroll mt-4 mb-4">
        <ItemList listView={false} items={itemPropsList} />
      </div>

      <div className="flex justify-between mb-5 gap-2">
        <NavButton route="AddItemToRegister" title={'Add product'} />
        <div className="flex gap-2">
          <button className="btn flex" onClick={() => setPerPage(perPage + 40)}>
            <ChevronDown />
            <p className="hidden sm:block">Show more</p>
          </button>
          <button
            className="btn flex"
            onClick={() => {
              if (perPage > 40) setPerPage(perPage - 40)
            }}
          >
            <p className="hidden sm:block">Show less</p>
            <ChevronUp />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemRegister
