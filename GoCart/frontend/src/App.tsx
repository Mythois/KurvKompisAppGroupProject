import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import ShoppingList from './pages/ShoppingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-green-50 h-screen'>

      <Navbar title='GoCart'/>
      <ShoppingList title={'Untitled list'}/>

    </div>

  )
}

export default App
