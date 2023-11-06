import { ObjectId } from 'mongodb';

const resolvers = (db) => ({
  Query: {
    // Resolver to retrieve a product by its ID
    getProduct: async (_, { _id }) => {
      try {
        // Find and return the product with the specified ID from the database
        const product = await db.collection('Products').findOne({ _id: new ObjectId(_id) });
        return product;
      } catch (error) {
        throw new Error(`Error retrieving product: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products with pagination
    getProducts: async (_, { page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products with pagination from the database
        const allProducts = await db.collection('Products').find().skip(skip).limit(limit).toArray();
        return allProducts;
      } catch (error) {
        throw new Error(`Error retrieving products: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by category
    getProductsByCategory: async (_, { category, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by the specified category from the database
        const products = await db.collection('Products').find({
          'category.name': category
        }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by category: ${error.message}`);
      }
    },

  },

  Product: {
    // You can add any additional resolvers for the Product type here if needed.
  },
});

export { resolvers };
