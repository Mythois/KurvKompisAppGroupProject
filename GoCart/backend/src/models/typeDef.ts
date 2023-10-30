import gql from 'graphql-tag'

const typeDefs = gql`
  #graphql
  type Product {
    _id: ID
    index: Int
    product_name_nb: String
    quantity: String
    serving_size: String
    packaging: String
    packaging_tags: String
    brands: [String]
    brands_tags: [String]
    categories: [String]
    categories_tags: [String]
    labels: [String]
    labels_tags: [String]
    countries: String
    countries_tags: String
    stores: String
    stores_tags: String
    manufacturing_places: String
    manufacturing_places_tags: String
    ingredients_text_nb: [String]
    allergens: String
    allergens_tags: String
    traces: String
    traces_tags: String
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
    monounsaturated_fat_value: String
    monounsaturated_fat_unit: String
    polyunsaturated_fat_value: String
    polyunsaturated_fat_unit: String
    food_groups: String
    food_groups_tags: [String]
    nova_groups: Float
    nova_groups_tags: String
    nutriscore_grade: String
    nutriscore_score: Float
    ecoscore_grade: String
    ecoscore_score: Float
    ecoscore_data: EcoscoreData
    data_sources: [String]
  }

  type EcoscoreData {
    missing_key_data: Float
    agribalyse: AgribalyseData
    adjustments: AdjustmentsData
  }

  type AgribalyseData {
    code: String
  }

  type AdjustmentsData {
    origins_of_ingredients: AdjustmentValue
    packaging: AdjustmentValue
    production_system: AdjustmentValue
  }

  type AdjustmentValue {
    value: Float
    non_recyclable_and_non_biodegradable_materials: Float
  }

  type Query {
    getProduct: Product
  }
`
export { typeDefs }
