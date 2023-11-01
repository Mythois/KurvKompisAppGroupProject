import { ObjectId } from 'mongodb'

const resolvers = (db) => ({
  Query: {
    // Resolver to retrieve a product by its ID
    product: async (_, { _id }) => {
      try {
        // Find and return the product with the specified ID from the database
        const product = await db.collection('Products').findOne({ _id: new ObjectId(_id) });
        return product;
      } catch (error) {
        throw new Error(`Error retrieving product: ${error.message}`);
      }
    },

    // Resolver to retrieve a product by its name
    productByName: async (_, { product_name_nb }) => {
      try {
        // Find and return the product with the specified name from the database
        const product = await db.collection('Products').findOne({ product_name_nb });
        return product;
      } catch (error) {
        throw new Error(`Error retrieving product by name: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products with pagination
    products: async (_, { page, perPage }) => {
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

    // Resolver to retrieve a list of products by store with pagination
    productsByStore: async (_, { store, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by store with pagination from the database
        const products = await db.collection('Products').find({ stores: store }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by store: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by brand with pagination
    productsByBrand: async (_, { brand, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by brand with pagination from the database
        const products = await db.collection('Products').find({ brand }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by brand: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by category with pagination
    productsByCategory: async (_, { category, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by category with pagination from the database
        const products = await db.collection('Products').find({ categories: category }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by category: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by label with pagination
    productsByLabel: async (_, { label, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by label with pagination from the database
        const products = await db.collection('Products').find({ labels: label }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by label: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by allergens with pagination
    productsByAllergens: async (_, { allergens, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by allergens with pagination from the database
        const products = await db.collection('Products').find({ allergens }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by allergens: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by ecoscore score with pagination
    productsByEcoscoreScore: async (_, { ecoscore_score, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by ecoscore score with pagination from the database
        const products = await db.collection('Products').find({ ecoscore_score }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by ecoscore score: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by ecoscore grade with pagination
    productsByEcoscoreGrade: async (_, { ecoscore_grade, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by ecoscore grade with pagination from the database
        const products = await db.collection('Products').find({ ecoscore_grade }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by ecoscore grade: ${error.message}`);
      }
    },

    // Resolver to retrieve a list of products by food group with pagination
    productsByFoodGroup: async (_, { food_group, page, perPage }) => {
      const skip = (page - 1) * perPage;
      const limit = perPage;
      try {
        // Find and return a list of products by food group with pagination from the database
        const products = await db.collection('Products').find({ food_group }).skip(skip).limit(limit).toArray();
        return products;
      } catch (error) {
        throw new Error(`Error retrieving products by food group: ${error.message}`);
      }
    },
  },
  // Add resolvers for mutations and other query types as needed
});

export { resolvers };
