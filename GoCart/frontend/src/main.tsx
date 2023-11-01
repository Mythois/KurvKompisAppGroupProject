import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

// Apollo client
const client = new ApolloClient({
  uri: 'http://localhost:4000', // GraphQL server endpoint (the uri of the apollo server)

  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query GetItem($id: ID!) {
        item(_id: $id) {
          product_name_nb
          salt_value
          salt_unit
        }
      }
    `,
    variables: { id: '65425c9f0f864c3cf2e22fbb' },
  })
  .then((result) => console.log(result))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
