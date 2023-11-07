import { gql } from "@apollo/client";

export const SEARCH_PRODUCTS = gql`
query Query($page: Int!, $perPage: Int!, $category: String, $name:String){
    searchProducts(page: $page, perPage: $perPage, category: $category, name: $name){
        name
    }
}`