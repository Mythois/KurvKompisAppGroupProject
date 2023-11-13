// "ListeDetaljer" -> The site that shows details about the shoppinglist with the specific title you choose

import { useReactiveVar } from '@apollo/client'
import { shoppingListProductsVar } from '../utils/reactiveVariables/reactiveVariables.tsx'

import ProductList from './ProductList'
import { Link } from 'react-router-dom'
import { ProductProps } from './Product.tsx'

interface ShoppingListProps {
  title: string
  id: string
}

function ShoppingList({ title }: ShoppingListProps) {
  const shoppingListProducts: ProductProps[] = useReactiveVar(shoppingListProductsVar)

  return (
    <div className="">
      <h1 className="mb-2 text-2xl font-bold uppercase text-center">{title}</h1>
      <ProductList listView={true} products={shoppingListProducts} />
      <div className=" flex justify-center py-8">
        <Link to={'/Addproduct'}>
          <button className="btn">Add products</button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingList
