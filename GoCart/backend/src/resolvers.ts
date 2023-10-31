import { ObjectId } from 'mongodb'

const resolvers = (db) => ({
  Query: {
    item: async (_, { _id }) => {
      try {
        console.log(db)
        const item = await db.collection('Items').findOne({ _id: new ObjectId(_id) })
        console.log(item)
        return item
      } catch (error) {
        throw new Error(`Error retrieving item: ${error.message}`)
      }
    },
    itemByName: async (_, { product_name_nb }) => {
      try {
        const item = await db.collection('Items').findOne({ product_name_nb })
        return item
      } catch (error) {
        throw new Error(`Error retrieving item by name: ${error.message}`)
      }
    },
    items: async (_, { page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        const allProducts = await db.collection('Items').find().skip(skip).limit(limit).toArray()
        return allProducts
      } catch (error) {
        throw new Error(`Error retrieving items: ${error.message}`)
      }
    },
    itemsByStore: async (_, { store, page, perPage }) => {
      const skip = (page - 1) * perPage
      const limit = perPage
      try {
        const items = await db.collection('Items').find({ stores: store }).skip(skip).limit(limit).toArray()
        return items
      } catch (error) {
        throw new Error(`Error retrieving items by store: ${error.message}`)
      }
    },
    // Add other query resolvers using the same approach
  },
  // Add resolvers for mutations and other query types as needed
})

export { resolvers }
