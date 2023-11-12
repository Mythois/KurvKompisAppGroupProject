// The details about products in the given ShoppingList as well as well as in the register, where we want functionality for going to the next/previous product

import ProductDetails from '../components/ProductDetails'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
  //const { productId: paramId } = useParams() // Apparently it does not work when we change tha variable name
  const { productName: paramID } = useParams()
  //const productId = paramId as string
  const productName = paramID as string

  return (
    <div>
      <ProductDetails productID={productName} />
    </div>
  )
}

export default ProductDetailsPage
