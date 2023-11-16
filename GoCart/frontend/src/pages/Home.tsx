/* The home page of the application. */

// import ListShoppingList from '../components/ListShoppingList'
import ShoppingListPage from './ShoppingListPage'

function Home() {
  return (
    <div className="h-full mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12">
      <div className="overflow-y-scroll sm:grid pt-4">
        <ShoppingListPage />
      </div>
    </div>
  )
}

export default Home
