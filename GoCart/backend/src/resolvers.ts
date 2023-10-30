import mongoose from 'mongoose'
import { Item } from './models/Item.js'

const resolvers = {
  Query: {
    item: async (_, { _id }) => {
      try {
        console.log('_id: ' + _id)
        const objectId = new mongoose.Types.ObjectId(_id)
        console.log('objectID:' + objectId)
        const item = await Item.findById(objectId).exec()
        console.log('item:' + item)
        return item
      } catch (error) {
        throw new Error(`Error retrieving item: ${error.message}`)
      }
    },
    items: async (_, { page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        const allProducts = await Item.find().skip(skip).limit(limit).exec()
        return allProducts
      } catch (error) {
        throw new Error(`Error retrieving items: ${error.message}`)
      }
    },
    itemsByBrand: async (_, { brand }) => {
      try {
        const items = await Item.find({ brands: brand }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by brand: ${error.message}`)
      }
    },
    itemsByCategory: async (_, { category }) => {
      try {
        const items = await Item.find({ categories: category }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by category: ${error.message}`)
      }
    },
    itemsByLabel: async (_, { label }) => {
      try {
        const items = await Item.find({ labels: label }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by label: ${error.message}`)
      }
    },
    itemsByAllergens: async (_, { allergens }) => {
      try {
        const items = await Item.find({ allergens: allergens }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by allergens: ${error.message}`)
      }
    },
    itemsByEcoscoreScore: async (_, { ecoscore_score }) => {
      try {
        const items = await Item.find({ ecoscore_score: ecoscore_score }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by ecoscore score: ${error.message}`)
      }
    },
    itemsByEcoscoreGrade: async (_, { ecoscore_grade }) => {
      try {
        const items = await Item.find({ ecoscore_grade: ecoscore_grade }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by ecoscore grade: ${error.message}`)
      }
    },
    itemsByFoodGroup: async (_, { food_group }) => {
      try {
        const items = await Item.find({ food_groups: food_group }).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by food group: ${error.message}`)
      }
    },
    itemByName: async (_, { product_name_nb }) => {
      try {
        const item = await Item.findOne({ product_name_nb }).exec()
        return item
      } catch (error) {
        throw new Error(`Error retrieving item by name: ${error.message}`)
      }
    },
    itemsByStore: async (_, { store, page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        const items = await Item.find({ stores: store }).skip(skip).limit(limit).exec()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by store: ${error.message}`)
      }
    },
  },
  // Add resolvers for other query types and mutations as needed
}

export { resolvers }
