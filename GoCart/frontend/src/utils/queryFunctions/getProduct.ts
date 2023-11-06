import { gql, useQuery } from '@apollo/client';

// Define a GraphQL query string for searching products.
// This query returns the name of requested products and accepts parameters like page, perPage, category, and name.
const SEARCH_PRODUCTS = gql`
query Query($page: Int!, $perPage: Int!, $category: String, $name:string){
    searchProducts(page: $page, perPage: $perPage, category: $category, name: $name){
        name
    }
}
`

// Define an interface for the expected parameters and their types.
// page and perPage are required numbers, while category and name are optional strings.
// The loading property is included for indicating the loading state.
interface SearchProductsParams {
    page: number;
    perPage: number;
    category?: string;
    name?: string;
    loading?: boolean;
}

// Create a function called searchProducts that accepts parameters according to the SearchProductsParams interface.
// The function performs a GraphQL query using useQuery and returns the result.
export function searchProducts({ page, perPage, category, name }: SearchProductsParams): SearchProductsParams {
    const { loading, error, data } = useQuery(SEARCH_PRODUCTS, {
      variables: { page, perPage, category, name },
    });
  
    if (error) {
        console.error(`Error! ${error}`);
        // Return a default object indicating the error state.
        return { page: 0, perPage: 0 };
    }
  
    if (loading) {
        // Handle the case where the query is still loading.
        return { loading: true, page: 0, perPage: 0 };
    }
  
    // Return the actual data once the query is complete.
    return data;
}
