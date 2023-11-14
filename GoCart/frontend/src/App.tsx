import { Fragment } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import ShoppingListPage from './pages/ShoppingListPage'
import AddCustomProduct from './pages/AddCustomProduct'
import ProductDetailsPage from './pages/ProductDetailsPage'
import { useEffect, useState } from 'react'

function App() {
  // Dark mode
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Fragment>
      <Navbar title="GoCart" />
      <div className="pt-28 pr-4 pl-4 pb-14 sm:pb-0 lg:px-12 xl:px-24 h-screen bg-white dark:bgDark ">
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
    </Fragment>
  )
}

export default App
