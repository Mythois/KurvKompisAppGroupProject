// "ListeDetaljer" -> The site that shows details about the shoppinglist with the specific title you choose

import { useReactiveVar } from '@apollo/client'
import { shoppingListProductsVar } from '../utils/reactiveVariables/reactiveVariables.tsx'

import ProductList from './ProductList'
import { Link } from 'react-router-dom'
import { ProductProps } from './Product.tsx'

interface ShoppingListProps {
  title: string
}

function ShoppingList({ title }: ShoppingListProps) {
  const shoppingListProducts: ProductProps[] = useReactiveVar(shoppingListProductsVar)
  const isShoppingListEmpty = shoppingListProducts.length === 0

  return (
    <div className="h-full flex-col">
      <h1 className="mb-2 text-2xl font-bold uppercase text-center">{title}</h1>
      <div className="h-3/4 overflow-auto mb-4 sm:mb-8 relative">
        {isShoppingListEmpty ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <p>Handlelisten er for øyeblikket tom.</p>
              <p>Trykk på "Legg til produkter" for å begynne på handlelisten din!</p>
            </div>
          </div>
        ) : (
          <ProductList listView={true} products={shoppingListProducts} />
        )}
      </div>
      <div className="flex justify-center">
        <Link to={'/Addproduct'}>
          <button className="btn" data-testid="add-products-button">
            Legg til produkter
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingList
