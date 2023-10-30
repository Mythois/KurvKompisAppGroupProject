import { Item } from './models/Item'

const resolvers = {
  Query: {
    product: async (_, { _id }) => {
      try {
        const product = await Item.findById(_id).exec()
        return product
      } catch (error) {
        throw new Error(`Error retrieving product: ${error.message}`)
      }
    },
    products: async (_, { page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        const allProducts = await Item.find().skip(skip).limit(limit).exec()
        return allProducts
      } catch (error) {
        throw new Error(`Error retrieving products: ${error.message}`)
      }
    },
    productsByBrand: async (_, { brand }) => {
      try {
        const products = await Item.find({ brands: brand }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by brand: ${error.message}`)
      }
    },
    productsByCategory: async (_, { category }) => {
      try {
        const products = await Item.find({ categories: category }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by category: ${error.message}`)
      }
    },
    productsByLabel: async (_, { label }) => {
      try {
        const products = await Item.find({ labels: label }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by label: ${error.message}`)
      }
    },
    productsByAllergens: async (_, { allergens }) => {
      try {
        const products = await Item.find({ allergens: allergens }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by allergens: ${error.message}`)
      }
    },
    productsByEcoscoreScore: async (_, { ecoscore_score }) => {
      try {
        const products = await Item.find({ ecoscore_score: ecoscore_score }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by ecoscore score: ${error.message}`)
      }
    },
    productsByEcoscoreGrade: async (_, { ecoscore_grade }) => {
      try {
        const products = await Item.find({ ecoscore_grade: ecoscore_grade }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by ecoscore grade: ${error.message}`)
      }
    },
    productsByFoodGroup: async (_, { food_group }) => {
      try {
        const products = await Item.find({ food_groups: food_group }).exec()
        return products
      } catch (error) {
        throw new Error(`Error retrieving products by food group: ${error.message}`)
      }
    },
  },
  // Add resolvers for other query types and mutations as needed
}

export { resolvers }
