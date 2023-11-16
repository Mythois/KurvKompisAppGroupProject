import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ShoppingListPage from './pages/ShoppingListPage'
import AddCustomProduct from './pages/AddCustomProduct'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  return (
    <>
      <Navbar title="GoCart" />
      <div className="pt-28 pr-4 pl-4 pb-14 sm:pb-0 lg:px-12 xl:px-24 h-screen bgLight bgDark text-gray-800 dark:text-gray-50">
        <Routes>
          <Route path={''} element={<Home />} />
          <Route path={'/Home'} element={<Home />} />
          <Route path={'/AddCustomProduct'} element={<AddCustomProduct />} />
          <Route path={'/ProductsPage'} element={<ProductsPage editable={false} />} />
          <Route path={'/AddProduct'} element={<ProductsPage editable={true} />} />
          <Route path={'/ShoppingListPage/:id'} element={<ShoppingListPage />} />
          <Route path={'/ProductDetailsPage/:productName'} element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
