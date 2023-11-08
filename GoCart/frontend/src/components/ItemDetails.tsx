// ItemDetails Component: Displays details of a product (aka item)

import { GET_PRODUCT_BY_ID } from '../utils/queryFunctions/getProduct'
import { useQuery } from '@apollo/client'


interface ItemDetailsProps {
  itemID: string // The name of the food item to display
}

// The expected format of the query response
interface Product {
  name: string;
  nutrition: {
    display_name: string;
    amount: number;
    unit: string;
  }[];
  store: {
    name: string;
  };
  vendor: string;
  weight: number;
  weight_unit: string;
  category: {
    name: string;
  }[];
  allergens: {
    display_name: string;
  }[];
  description:string;
}



function ItemDetails({ itemID }: ItemDetailsProps) {
  
  const {loading, error, data} = useQuery(GET_PRODUCT_BY_ID,{
    variables:{_id: itemID}
  })

  if (loading){
    return <div>Loading...</div>
  }

  if (error){
    return <div>Error: {error.message}</div>
  }

  const item: Product | undefined = data.getProduct || undefined

  if (!item) {
    return <div>Item not found.</div>
  }

  // Putting item data into ui components for rendering
  const itemData = 
  <ul>
    <li><strong>{item.name}</strong></li>
    <li><strong>Nutrition</strong></li>
    <ul>
      {item.nutrition ? (
              <ul>
                {item.nutrition.map((nutritionItem, index) => (
                  <li key={index}>
                    <strong>{nutritionItem.display_name}: </strong>
                    {nutritionItem.amount} {nutritionItem.unit}
                  </li>
                ))}
              </ul>
            ) : "N/A"}
    </ul>
    <li><strong>Store: </strong> {item.store ? item.store.name : "N/A"}</li>
    <li><strong>Vendor: </strong> {item.vendor || "N/A"}</li>
    <li><strong>Weight: </strong> {item.weight || "N/A"} {item.weight_unit || ""}</li>
    <li><strong>Categories</strong></li>
    <ul>
    {item.category ? (
              <ul>
                {item.category.map((categoryItem, index) => (
                  <li key={index}>{categoryItem.name}</li>
                ))}
              </ul>
            ) : "N/A"}
    </ul>
    <li><strong>Allergens:</strong>
  {item.allergens ? (
    <ul>
      {item.allergens.map((allergenItem, index) => (
        <li key={index}>{allergenItem.display_name}</li>
      ))
    }
  </ul>
  ) : "N/A"}
</li>
    <li><strong>Description:</strong></li>
    {item.description || "N/A"}
  </ul>

  return (
    <div className="flex justify-center">
      <div style={{ width: `60%` }} className="my-4 mx-auto p-6 bg-green-100 border border-green-200 rounded-lg">
        <h2 className="text-2xl  mb-2 pb-2 border-b border-green-200">Information</h2>
         {itemData}

      </div>
    </div>
  )
}

export default ItemDetails
