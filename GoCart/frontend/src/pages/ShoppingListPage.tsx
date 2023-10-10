// This page is for mobile view only
// The shoppinglist will be displayed in the home page in desktop view

import ShoppingList from '../components/ShoppingList'

interface ShoppingListProps {
  title: string;
}

function ShoppingListPage({title}: ShoppingListProps) {
  return (
    <div className='sm:hidden'>
        <ShoppingList title={title}/>
    </div>
  )
}

export default ShoppingListPage