import { ProductProps } from '../../components/Product.tsx'
import { makeVar, ReactiveVar } from '@apollo/client'

// Apollo client - This should probably be moved to another file Apollo/client.ts
export const shoppingListProductsVar: ReactiveVar<ProductProps[]> = makeVar<ProductProps[]>(
  // Read the initial state from local storage or default to an empty array
  JSON.parse(localStorage.getItem('shoppingList') || '[]'),
)

export const shoppingListsVar = makeVar(JSON.parse(localStorage.getItem('shoppingLists') || '[]'))
