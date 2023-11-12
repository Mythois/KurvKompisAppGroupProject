// This page is for mobile view only
// The shoppinglist will be displayed in the home page in desktop view

import ShoppingList from '../components/ShoppingList'
import { useParams } from 'react-router-dom'

interface ShoppingListProps {
  title: string
  products: string[]
}

function ShoppingListPage({ title, products }: ShoppingListProps) {
  const { id: paramId } = useParams()
  const id = paramId as string

  return (
    <div>
      <ShoppingList title={title} id={id} products={products} />
    </div>
  )
}

export default ShoppingListPage
