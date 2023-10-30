import gql from 'graphql-tag'

const typeDefs = gql`
  #graphql
  type Item {
    _id: ID!
    index: Int
    product_name_nb: String
    quantity: String
    serving_size: String
    packaging: [String]
    packaging_tags: [String]
    brands: [String]
    brands_tags: [String]
    categories: [String]
    categories_tags: [String]
    labels: [String]
    labels_tags: [String]
    countries: [String]
    countries_tags: [String]
    stores: [String]
    stores_tags: [String]
    manufacturing_places: [String]
    manufacturing_places_tags: [String]
    ingredients_text_nb: [String]
    allergens: [String]
    allergens_tags: [String]
    traces: [String]
    traces_tags: [String]
    nutrition_data_per: String
    nutrition_data_prepared_per: String
    energy_kj_value: String
    energy_kj_unit: String
    energy_kcal_value: String
    energy_kcal_unit: String
    fat_value: String
    fat_unit: String
    saturated_fat_value: String
    saturated_fat_unit: String
    carbohydrates_value: String
    carbohydrates_unit: String
    sugars_value: String
    sugars_unit: String
    fiber_value: String
    fiber_unit: String
    proteins_value: String
    proteins_unit: String
    salt_value: String
    salt_unit: String
    sodium_value: String
    sodium_unit: String
    energy_value: String
    energy_unit: String
    monounsaturated_fat_value: String
    monounsaturated_fat_unit: String
    polyunsaturated_fat_value: String
    polyunsaturated_fat_unit: String
    food_groups: String
    food_groups_tags: [String]
    nova_groups: String
    nova_groups_tags: String
    nutriscore_grade: String
    nutriscore_score: String
    ecoscore_grade: String
    ecoscore_score: String
    ecoscore_data: EcoscoreData
    data_sources: [String]
  }

  type EcoscoreData {
    missing_key_data: String
    agribalyse: AgribalyseData
    adjustments: AdjustmentsData
  }

  type AgribalyseData {
    code: String
  }

  type AdjustmentsData {
    origins_of_ingredients: OriginOfIngredientsData
    packaging: PackagingData
    production_system: ProductionSystemData
  }

  type OriginOfIngredientsData {
    value: String
  }

  type PackagingData {
    value: String
    non_recyclable_and_non_biodegradable_materials: String
  }

  type ProductionSystemData {
    value: String
  }

  type Query {
    item(_id: ID!): Item
    items(page: Int!, perPage: Int!): [Item]
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
