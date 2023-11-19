// File containing gql strings to add Products to the database

import { gql } from '@apollo/client'

export const ADD_CUSTOM_PRODUCT = gql`
  mutation AddCustomProduct($input: ProductInput) {
    addCustomProduct(type: $type) {
      name
      category1
      category2
      category3
      category4
      calories
      fat
      carbohydrates
      proteins
      salt
      sugar
      store
      brand
      additionalInfo
    }
  }
`
