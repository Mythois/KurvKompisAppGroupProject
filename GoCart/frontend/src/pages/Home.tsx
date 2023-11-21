/* The home page of the application. */

import ShoppingList from '../components/ShoppingList'

function Home() {
  return (
    <div className="h-full contentCenter pt-8">
      <ShoppingList title={'My shopping list'} />
    </div>
  )
}

export default Home
