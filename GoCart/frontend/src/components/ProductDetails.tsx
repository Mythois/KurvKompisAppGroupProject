// ProductDetails Component: Displays details of a product (aka Product)

import { GET_PRODUCT_BY_ID } from '../utils/queryFunctions/getProduct'
import { useQuery } from '@apollo/client'
import ProductImage from './ProductImage'

interface ProductDetailsProps {
  productID: string // The name of the food product to display
}

// The expected format of the query response
interface Product {
  name: string
  nutrition: {
    display_name: string
    amount: number
    unit: string
  }[]
  store: {
    name: string
  }
  vendor: string
  weight: number
  weight_unit: string
  category: {
    name: string
  }[]
  allergens: {
    display_name: string
    contains: string
  }[]
  description: string
  image: string
}

function ProductDetails({ productID }: ProductDetailsProps) {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { _id: productID },
  })

  if (loading) {
    return <div>Laster...</div>
  }

  if (error) {
    return <div>Feilmelding: {error.message}</div>
  }

  const product: Product | undefined = data.getProduct || undefined

  if (!product) {
    return <div>Kan ikke finne produktet.</div>
  }

  return (
    <div className="h-full">
      <h2 className="text-2xl">{product.name}</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-2 overflow-y-scroll h-5/6">
        <div className="sm:col-span-2 w-2/3 xl:w-1/2 mx-auto">
          <ProductImage src={product.image} alt={product.name} />
        </div>
        <div className="p-2">
          <ul>
            <p className="text-xl">Næringsinnhold</p>
            {product.nutrition ? (
              <ul>
                {product.nutrition.map((nutritionproduct, index) => (
                  <li key={index}>
                    <strong>{nutritionproduct.display_name}: </strong>
                    {nutritionproduct.amount} {nutritionproduct.unit}
                  </li>
                ))}
              </ul>
            ) : (
              'N/A'
            )}
          </ul>
        </div>

        <div className="p-2">
          <p className="text-xl">Info</p>
          <ul>
            <strong>Butikk: </strong>
            {product.store ? product.store.name : 'N/A'}
          </ul>
          <ul>
            <strong>Forhandler: </strong>
            {product.vendor || 'N/A'}
          </ul>
          <ul>
            <strong>Vekt: </strong>
            {product.weight || 'N/A'} {product.weight_unit || ''}
          </ul>

          {/* Categories */}
          <div className="">
            <strong>Kategorier:</strong>
            <ul>
              {product.category ? (
                <>
                  {product.category.map((categoryproduct, index) => (
                    <li key={index}>{categoryproduct.name}</li>
                  ))}
                </>
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
          {/* Allergens */}
          <div className="">
            <strong>Allergener:</strong>
            <ul>
              {product.allergens ? (
                product.allergens.every((allergenproduct) => allergenproduct.contains === 'NO') ? (
                  'N/A'
                ) : (
                  <ul>
                    {product.allergens.map((allergenproduct, index) =>
                      allergenproduct.contains === 'YES' || allergenproduct.contains === 'CAN_CONTAIN_TRACES' ? (
                        <li key={index}>
                          {allergenproduct.display_name}
                          {allergenproduct.contains === 'CAN_CONTAIN_TRACES' ? ' (kan inneholde spor)' : null}
                        </li>
                      ) : null,
                    )}
                  </ul>
                )
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
          {/* Description */}
        </div>
        <div className="p-2 sm:col-span-2">
          <p className="text-xl">Beskrivelse</p>
          <p>{product.description || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
