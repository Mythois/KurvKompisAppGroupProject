import { Fragment } from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ShoppingListPage from './pages/ShoppingListPage'
import AddCustomProduct from './pages/AddCustomProduct'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  return (
    <Fragment>
      <Navbar title="GoCart" />
      <div className="pt-28 pr-4 pl-4 pb-14 sm:pb-0 lg:px-12 xl:px-24 h-full">
        <Routes>
          <Route path={''} element={<Home />} />
          <Route path={'/Home'} element={<Home />} />
          <Route path={'/AddCustomProduct'} element={<AddCustomProduct />} />
          <Route path={'/ProductsPage'} element={<ProductsPage editable={false} />} />
          <Route path={'/AddProduct'} element={<ProductsPage editable={true} />} />
          <Route path={'/ShoppingListPage/:id'} element={<ShoppingListPage title="title" products={[]} />} />
          <Route path={'/ProductDetailsPage/:productName'} element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App
