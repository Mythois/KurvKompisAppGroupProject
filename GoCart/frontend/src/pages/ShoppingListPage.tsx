// This page is for mobile view only
// The shoppinglist will be displayed in the home page in desktop view

import ShoppingList from '../components/ShoppingList'
import { useParams } from 'react-router-dom'

function ShoppingListPage() {
  const { id: paramId } = useParams()
  const id = paramId as string

  return (
    <div>
      <ShoppingList title={'My shopping list'} id={id} />
    </div>
  )
}

export default ShoppingListPage
