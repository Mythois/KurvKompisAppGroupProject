import { gql } from '@apollo/client';

export const GetProduct = gql`
    query GetProduct($id: ID){
        product(_id: $id){
            
        }
    }
`