// "ListeDetaljer" -> The site that shows details about the shoppinglist with the specific title you choose

import ProductList from './ProductList'
import { Link } from 'react-router-dom'

// mock data just for visualizing the list
const mockProducts = [
  { productName: 'product 1', increment: true, decrement: true, quantity: true, productID: '1' },
  { productName: 'product 2', increment: true, decrement: true, quantity: true, productID: '2' },
  { productName: 'product 3', increment: true, decrement: true, quantity: true, productID: '3' },
  { productName: 'product 4', increment: true, decrement: true, quantity: true, productID: '4' },
  { productName: 'product 5', increment: true, decrement: true, quantity: true, productID: '5' },
  { productName: 'product 6', increment: true, decrement: true, quantity: true, productID: '6' },
  { productName: 'product 7', increment: true, decrement: true, quantity: true, productID: '7' },
  // Add more products as needed
]

interface ShoppingListProps {
  title: string
  products: string[]
  // id: string
}

function ShoppingList({ title }: ShoppingListProps) {
  return (
    <div className="">
      <h1 className="mb-2 text-2xl font-bold uppercase text-center">{title}</h1>
      <ProductList listView={true} products={mockProducts} />
      <div className=" flex justify-center py-8">
        <Link to={'/Addproduct'}>
          <button className="btn">Add product</button>
        </Link>
      </div>
    </div>
  )
}

export default ShoppingList
