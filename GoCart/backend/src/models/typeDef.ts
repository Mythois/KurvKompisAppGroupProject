import gql from 'graphql-tag'

const typeDefs = gql`
  type Item {
    _id: ID!
    product_name_nb: String
    quantity: String
    categories: [String]
    allergens: String
    allergens_tags: [String]
    nutrition_data_per: String
    nutrition_data_prepared_per: String
    energy_kj_value: Float
    energy_kj_unit: String
    energy_kcal_value: Float
    energy_kcal_unit: String
    fat_value: Float
    fat_unit: String
    saturated_fat_value: Float
    saturated_fat_unit: String
    carbohydrates_value: Float
    carbohydrates_unit: String
    sugars_value: Float
    sugars_unit: String
    fiber_value: Float
    fiber_unit: String
    proteins_value: Float
    proteins_unit: String
    salt_value: Float
    salt_unit: String
    sodium_value: Float
    sodium_unit: String
    energy_value: Float
    energy_unit: String
    monounsaturated_fat_value: Float
    monounsaturated_fat_unit: String
    polyunsaturated_fat_value: Float
    polyunsaturated_fat_unit: String
  }

  type Query {
    item(_id: ID!): Item
    itemByName(product_name_nb: String!): Item
    items(page: Int!, perPage: Int!): [Item]
    itemsByStore(store: String!, page: Int!, perPage: Int!): [Item]
    itemsByBrand(brand: String!, page: Int!, perPage: Int!): [Item]
    itemsByCategory(category: String!, page: Int!, perPage: Int!): [Item]
    itemsByLabel(label: String!, page: Int!, perPage: Int!): [Item]
    itemsByAllergens(allergens: String!, page: Int!, perPage: Int!): [Item]
    itemsByEcoscoreScore(ecoscore_score: String!, page: Int!, perPage: Int!): [Item]
    itemsByEcoscoreGrade(ecoscore_grade: String!, page: Int!, perPage: Int!): [Item]
    itemsByFoodGroup(food_group: String!, page: Int!, perPage: Int!): [Item]
  }
`

export { typeDefs }
