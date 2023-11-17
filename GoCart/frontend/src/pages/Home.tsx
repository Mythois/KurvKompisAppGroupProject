/* The home page of the application. */

import ShoppingList from '../components/ShoppingList'

function Home() {
  return (
    <div className="h-full mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 pt-8">
      <ShoppingList title={'My shopping list'} />
    </div>
  )
}

export default Home
