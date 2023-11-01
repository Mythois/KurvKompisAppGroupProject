/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Item = {
  __typename?: 'Item';
  _id: Scalars['ID']['output'];
  allergens?: Maybe<Scalars['String']['output']>;
  allergens_tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  carbohydrates_unit?: Maybe<Scalars['String']['output']>;
  carbohydrates_value?: Maybe<Scalars['Float']['output']>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  energy_kcal_unit?: Maybe<Scalars['String']['output']>;
  energy_kcal_value?: Maybe<Scalars['Float']['output']>;
  energy_kj_unit?: Maybe<Scalars['String']['output']>;
  energy_kj_value?: Maybe<Scalars['Float']['output']>;
  energy_unit?: Maybe<Scalars['String']['output']>;
  energy_value?: Maybe<Scalars['Float']['output']>;
  fat_unit?: Maybe<Scalars['String']['output']>;
  fat_value?: Maybe<Scalars['Float']['output']>;
  fiber_unit?: Maybe<Scalars['String']['output']>;
  fiber_value?: Maybe<Scalars['Float']['output']>;
  monounsaturated_fat_unit?: Maybe<Scalars['String']['output']>;
  monounsaturated_fat_value?: Maybe<Scalars['Float']['output']>;
  nutrition_data_per?: Maybe<Scalars['String']['output']>;
  nutrition_data_prepared_per?: Maybe<Scalars['String']['output']>;
  polyunsaturated_fat_unit?: Maybe<Scalars['String']['output']>;
  polyunsaturated_fat_value?: Maybe<Scalars['Float']['output']>;
  product_name_nb?: Maybe<Scalars['String']['output']>;
  proteins_unit?: Maybe<Scalars['String']['output']>;
  proteins_value?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  salt_unit?: Maybe<Scalars['String']['output']>;
  salt_value?: Maybe<Scalars['Float']['output']>;
  saturated_fat_unit?: Maybe<Scalars['String']['output']>;
  saturated_fat_value?: Maybe<Scalars['Float']['output']>;
  sodium_unit?: Maybe<Scalars['String']['output']>;
  sodium_value?: Maybe<Scalars['Float']['output']>;
  sugars_unit?: Maybe<Scalars['String']['output']>;
  sugars_value?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  item?: Maybe<Item>;
  itemByName?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  itemsByAllergens?: Maybe<Array<Maybe<Item>>>;
  itemsByBrand?: Maybe<Array<Maybe<Item>>>;
  itemsByCategory?: Maybe<Array<Maybe<Item>>>;
  itemsByEcoscoreGrade?: Maybe<Array<Maybe<Item>>>;
  itemsByEcoscoreScore?: Maybe<Array<Maybe<Item>>>;
  itemsByFoodGroup?: Maybe<Array<Maybe<Item>>>;
  itemsByLabel?: Maybe<Array<Maybe<Item>>>;
  itemsByStore?: Maybe<Array<Maybe<Item>>>;
};


export type QueryItemArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryItemByNameArgs = {
  product_name_nb: Scalars['String']['input'];
};


export type QueryItemsArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByAllergensArgs = {
  allergens: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByBrandArgs = {
  brand: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByCategoryArgs = {
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByEcoscoreGradeArgs = {
  ecoscore_grade: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByEcoscoreScoreArgs = {
  ecoscore_score: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByFoodGroupArgs = {
  food_group: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByLabelArgs = {
  label: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryItemsByStoreArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  store: Scalars['String']['input'];
};
