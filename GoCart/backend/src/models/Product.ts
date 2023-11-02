import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product_name_nb: String,
  quantity: String,
  categories: [String],
  allergens: String,
  allergens_tags: [String],
  nutrition_data_per: String,
  nutrition_data_prepared_per: String,
  energy_kj_value: Number,
  energy_kj_unit: String,
  energy_kcal_value: Number,
  energy_kcal_unit: String,
  fat_value: Number,
  fat_unit: String,
  saturated_fat_value: Number,
  saturated_fat_unit: String,
  carbohydrates_value: Number,
  carbohydrates_unit: String,
  sugars_value: Number,
  sugars_unit: String,
  fiber_value: Number,
  fiber_unit: String,
  proteins_value: Number,
  proteins_unit: String,
  salt_value: Number,
  salt_unit: String,
  sodium_value: Number,
  sodium_unit: String,
  energy_value: Number,
  energy_unit: String,
  monounsaturated_fat_value: Number,
  monounsaturated_fat_unit: String,
  polyunsaturated_fat_value: Number,
  polyunsaturated_fat_unit: String,
})

// Create the "Items" model
const Product = mongoose.model('Product', productSchema)

export { Product }
