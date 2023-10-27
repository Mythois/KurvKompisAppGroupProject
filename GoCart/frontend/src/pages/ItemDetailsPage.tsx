// The details about items in the given ShoppingList as well as well as in the register, where we want functionality for going to the next/previous item

import React from 'react'
import ItemDetails from '../components/ItemDetails'
import { useParams } from 'react-router-dom'

interface ItemDetailsPageProps {
  showArrowButtons: boolean
}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = () => {
  const { itemName: paramId } = useParams()
  const itemName = paramId as string

  return (
    <div>
      <ItemDetails itemName={itemName} />
    </div>
  )
}

export default ItemDetailsPage
