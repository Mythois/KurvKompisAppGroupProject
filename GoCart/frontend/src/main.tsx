import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

// Apollo client
const client = new ApolloClient({
  uri: import.meta.env.DEV?'http://localhost:4000':'http://it2810-22.idi.ntnu.no:4000', // GraphQL server endpoint (the uri of the apollo server)

  cache: new InMemoryCache(),
})

/* Test query.
Check out https://www.apollographql.com/docs/react/development-testing/static-typing/ for how to do more advanced stuff and
how to do queries in other files*/
client
  .query({
    query: gql`
      query getProductsByCategory($category: String!, $page: Int!, $perPage: Int!) {
        getProductsByCategory(category: $category, page: $page, perPage: $perPage) {
          _id
          name
          brand
          description
        }
      }
    `,
    variables: { category: 'Barnedessert', page: 1, perPage: 100 },
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/project2'>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
