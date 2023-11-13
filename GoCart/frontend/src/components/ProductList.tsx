// Functional component that renders a list of 'products'

import Product from './Product'

// Define the props for the productList component
interface ProductListProps {
  products: Array<{
    productName: string
    productID: string
    productQuantity?: number
    increment?: boolean
    decrement?: boolean
    quantity?: boolean
    listView?: boolean
  }>
  listView: boolean
}

function ProductList({ products, listView }: ProductListProps) {
  return (
    // Render the products in a grid based on the listView prop
    <div
      className={`grid bg-white rounded-2xl ${
        listView ? 'grid-cols-1' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }`}
    >
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          productID={product.productID}
          productQuantity={product.productQuantity}
          increment={product.increment}
          decrement={product.decrement}
          quantity={product.quantity}
          listView={listView} // Pass the listview based on the listView prop
        />
      ))}
    </div>
  )
}

export default ProductList
