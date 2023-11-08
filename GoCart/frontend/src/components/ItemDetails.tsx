// ItemDetails Component: Displays details of a product (aka item)

import { GET_PRODUCT_BY_ID } from '../utils/queryFunctions/getProduct'
import { useQuery } from '@apollo/client'

interface ItemDetailsProps {
  itemID: string // The name of the food item to display
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
  }[]
  description: string
}

function ItemDetails({ itemID }: ItemDetailsProps) {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { _id: itemID },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const item: Product | undefined = data.getProduct || undefined

  if (!item) {
    return <div>Item not found.</div>
  }

  return (
    <div>
      <h2 className="text-2xl">{item.name}</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-2">
        <div className="p-2">
          <ul>
            <p className="text-xl">Nutrition</p>
            {item.nutrition ? (
              <ul>
                {item.nutrition.map((nutritionItem, index) => (
                  <li key={index}>
                    <strong>{nutritionItem.display_name}: </strong>
                    {nutritionItem.amount} {nutritionItem.unit}
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
            <strong>Store: </strong>
            {item.store ? item.store.name : 'N/A'}
          </ul>
          <ul>
            <strong>Vendor: </strong>
            {item.vendor || 'N/A'}
          </ul>
          <ul>
            <strong>Weight: </strong>
            {item.weight || 'N/A'} {item.weight_unit || ''}
          </ul>

          {/* Categories */}
          <div className="">
            <strong>Categories:</strong>
            <ul>
              {item.category ? (
                <li>
                  {item.category.map((categoryItem, index) => (
                    <li key={index}>{categoryItem.name}</li>
                  ))}
                </li>
              ) : (
                'N/A'
              )}
            </ul>
          </div>
          {/* Allergens */}
          <div className="">
            <strong>Allergens:</strong>
            <ul>
              {item.allergens ? (
                <ul>
                  {item.allergens.map((allergenItem, index) => (
                    <li key={index}>{allergenItem.display_name}</li>
                  ))}
                </ul>
              ) : (
                'N/A'
              )}
            </ul>
          </div>
          {/* Description */}
        </div>
        <div className="p-2 sm:col-span-2">
          <ul>
            <p className="text-xl">Description</p>
          </ul>
          <p>{item.description || 'N/A'}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
