import { ObjectId } from 'mongodb'

const resolvers = (db) => ({
  Query: {
    // Resolver to retrieve an item by its ID
    item: async (_, { _id }) => {
      try {
        // Find and return the item with the specified ID from the database
        const item = await db.collection('Items').findOne({ _id: new ObjectId(_id) })
        return item
      } catch (error) {
        throw new Error(`Error retrieving item: ${error.message}`)
      }
    },

    // Resolver to retrieve an item by its name
    itemByName: async (_, { product_name_nb }) => {
      try {
        // Find and return the item with the specified name from the database
        const item = await db.collection('Items').findOne({ product_name_nb })
        return item
      } catch (error) {
        throw new Error(`Error retrieving item by name: ${error.message}`)
      }
    },

    // Resolver to retrieve a list of items with pagination
    items: async (_, { page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        // Find and return a list of items with pagination from the database
        const allProducts = await db.collection('Items').find().skip(skip).limit(limit).toArray()
        return allProducts
      } catch (error) {
        throw new Error(`Error retrieving items: ${error.message}`)
      }
    },

    // Resolver to retrieve a list of items by store with pagination
    itemsByStore: async (_, { store, page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        // Find and return a list of items by store with pagination from the database
        const items = await db.collection('Items').find({ stores: store }).skip(skip).limit(limit).toArray()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by store: ${error.message}`)
      }
    },
    // You can add other query resolvers here for new schema fields
  },
  // Add resolvers for mutations and other query types as needed
})

export { resolvers }
