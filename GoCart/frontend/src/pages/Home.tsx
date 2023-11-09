/* The home page of the application. */

import ListShoppingList from '../components/ListShoppingList'
import ShoppingList from '../components/ShoppingList'

function Home() {
  return (
    <div className="grid gap-4 lg:gap-16 sm:grid-cols-2">
      <div className="md:col-span-1">
        <ListShoppingList />
      </div>
      <div className="hidden sm:grid">
        <ShoppingList title={'test'} id={'0'} products={[]} />
      </div>
    </div>
  )
}

export default Home
