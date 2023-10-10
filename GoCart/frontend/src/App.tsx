import { Fragment, useState } from 'react'


import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ItemRegister from './pages/ItemRegister'
import ShoppingListPage from './pages/ShoppingListPage'



function App() {

  return (
    <Fragment>
    <Navbar title='GoCart'/>
    <div className='pt-24'>
      <Routes>
        <Route path={import.meta.env.BASE_URL + "/Home"} element={<Home/>}/>
        <Route path={import.meta.env.BASE_URL + "/ItemRegister"} element={<ItemRegister/>}/>
        <Route path={import.meta.env.BASE_URL + "/ShoppingListPage"} element={<ShoppingListPage title='testList'/>}/>
        <Route path={import.meta.env.BASE_URL} element={<Home/>}/>
      </Routes>
    </div>
    </Fragment>
  )
}

export default App

