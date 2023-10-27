import { Fragment, useState } from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ItemRegister from './pages/ItemRegister'
import ShoppingListPage from './pages/ShoppingListPage'
import ItemDetailsPage from './pages/ItemDetailsPage'

function App() {
  return (
    <Fragment>
      <Navbar title="GoCart" />
      <div className="pt-24 bg-green-50 h-screen">
        <Routes>
          <Route path={import.meta.env.BASE_URL + '/Home'} element={<Home />} />
          <Route path={import.meta.env.BASE_URL + '/ItemRegister'} element={<ItemRegister editable={false} />} />
          <Route path={import.meta.env.BASE_URL + '/AddItem'} element={<ItemRegister editable={true} />} />
          <Route
            path={import.meta.env.BASE_URL + '/ShoppingListPage/:id'}
            element={<ShoppingListPage title="title" items={[]} />}
          />
          <Route
            path={import.meta.env.BASE_URL + '/ItemDetailsPage/:itemName'}
            element={<ItemDetailsPage showArrowButtons={true} />}
          />
          <Route path={import.meta.env.BASE_URL} element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App
