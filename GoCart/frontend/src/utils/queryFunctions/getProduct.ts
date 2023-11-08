import { gql } from '@apollo/client'

export const SEARCH_PRODUCTS = gql`
query Query($page: Int!, $perPage: Int!, $category: String, $name:String){
    searchProducts(page: $page, perPage: $perPage, category: $category, name: $name){
        name
        _id
    }
}`

export const GET_PRODUCT_BY_ID = gql`
  query Query($_id: ID!){
    getProduct(_id: $_id) {
      name
      nutrition {
        display_name
        amount
        unit
      }
      store {
        name
      }
      vendor
      weight
      weight_unit
      category {
        name
      }
      allergens {
        display_name
      }
      description
    }
  }
`