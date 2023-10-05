// dataService.ts
import rawData from './mockupData.json'; // Use the correct path to your JSON file

// Define the structure of a food item
export interface Food {
  name: string;
  calories?: string; // Optional properties for additional information
  carbohydrates?: string;
  fiber?: string;
  vitaminC?: string;
  fat?: string;
  protein?: string;
}

// Function to retrieve the food data
function getFoodData(): { [key: string]: Food[] } {
  return rawData.foods;
}

export { getFoodData };

