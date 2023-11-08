// The details about items in the given ShoppingList as well as well as in the register, where we want functionality for going to the next/previous item

import React from 'react'
import ItemDetails from '../components/ItemDetails'
import { useParams } from 'react-router-dom'



function ItemDetailsPage() {
  //const { itemId: paramId } = useParams() // Apparently it does not work when we change tha variable name
  const { itemName: paramID } = useParams()
  //const itemId = paramId as string
  const itemName = paramID as string

  

  return (
    <div>
      <ItemDetails itemID={itemName} />
    </div>
  )
}

export default ItemDetailsPage
