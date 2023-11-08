import { Fragment } from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ItemRegister from './pages/ItemRegister'
import ShoppingListPage from './pages/ShoppingListPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import AddItemToRegister from './pages/AddItemToRegister'

function App() {
  return (
    <Fragment>
      <Navbar title="GoCart" />
      <div className="pt-24 pr-4 pl-4 pb-14 sm:pb-0 h-screen">
        <Routes>
          <Route path={'/Home'} element={<Home />} />
          <Route path={'/AddItemToRegister'} element={<AddItemToRegister />} />
          <Route path={'/ItemRegister'} element={<ItemRegister editable={false} />} />
          <Route path={'/AddItem'} element={<ItemRegister editable={true} />} />
          <Route
            path={'/ShoppingListPage/:id'}
            element={<ShoppingListPage title="title" items={[]} />}
          />
          <Route path={'/ItemDetailsPage/:itemName'} element={<ItemDetailsPage />} />

          <Route path={""} element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App
