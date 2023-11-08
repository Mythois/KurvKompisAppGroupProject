import gql from 'graphql-tag';

const typeDefs = gql`
  type Product {
    _id: ID!
    id: Int!
    name: String!
    brand: String
    vendor: String
    ean: String
    url: String
    image: String
    category: [Category]
    description: String
    ingredients: String
    current_price: Float
    current_unit_price: Float
    weight: Float
    weight_unit: String
    store: Store
    price_history: [PriceHistory]
    allergens: [Allergen]
    nutrition: [Nutrition]
    labels: [Label]
    created_at: String
    updated_at: String
  }

  type Category {
    id: Int
    depth: Int
    name: String
  }

  type Store {
    name: String
    code: String
    url: String
    logo: String
  }

  type PriceHistory {
    price: Float
    date: String
  }

  type Allergen {
    code: String
    display_name: String
    contains: String
  }

  type Nutrition {
    code: String
    display_name: String
    amount: Float
    unit: String
  }

  type Label {
    name: String
    display_name: String
    description: String
    organization: String
    alternative_names: [String]
    type: String
    year_established: Int
    about: String
    note: String
    icon: LabelIcon
  }

  type LabelIcon {
    svg: String
    png: String
  }

  type Query {
    getProduct(_id: ID!): Product
    getProducts(page: Int!, perPage: Int!): [Product]
    getProductsByCategory(category: String!, page: Int!, perPage: Int!): [Product]
    getProductsByName(name: String!, page: Int!, perPage: Int!): [Product]
    # searchProducts can be used to query by just name, just category, both or to just get all products.
    searchProducts(name: String, category: String, page: Int!, perPage: Int!, sortDirection: String): [Product]

  }
`;

export default typeDefs;
