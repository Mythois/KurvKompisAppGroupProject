/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type Allergen = {
  __typename?: 'Allergen';
  code: Scalars['String']['output'];
  contains: Scalars['String']['output'];
  display_name: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  depth: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Label = {
  __typename?: 'Label';
  about?: Maybe<Scalars['String']['output']>;
  alternative_names: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  display_name: Scalars['String']['output'];
  icon?: Maybe<LabelIcon>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  year_established?: Maybe<Scalars['Int']['output']>;
};

export type LabelIcon = {
  __typename?: 'LabelIcon';
  png?: Maybe<Scalars['String']['output']>;
  svg?: Maybe<Scalars['String']['output']>;
};

export type Nutrition = {
  __typename?: 'Nutrition';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  display_name: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type PriceHistory = {
  __typename?: 'PriceHistory';
  date: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  allergens: Array<Allergen>;
  brand: Scalars['String']['output'];
  category: Array<Category>;
  created_at: Scalars['String']['output'];
  current_price: Scalars['Float']['output'];
  current_unit_price: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  ean: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  ingredients: Scalars['String']['output'];
  labels: Array<Label>;
  name: Scalars['String']['output'];
  nutrition: Array<Nutrition>;
  price_history: Array<PriceHistory>;
  store: Store;
  updated_at: Scalars['String']['output'];
  url: Scalars['String']['output'];
  vendor: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
  weight_unit: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getProduct?: Maybe<Product>;
  getProducts?: Maybe<Array<Maybe<Product>>>;
  getProductsByCategory?: Maybe<Array<Maybe<Product>>>;
};


export type QueryGetProductArgs = {
  _id: Scalars['ID']['input'];
};


export type QueryGetProductsArgs = {
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryGetProductsByCategoryArgs = {
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};

export type Store = {
  __typename?: 'Store';
  code: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type GetProductsByCategoryQueryVariables = Exact<{
  category: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetProductsByCategoryQuery = { __typename?: 'Query', getProductsByCategory?: Array<{ __typename?: 'Product', _id: string, name: string, brand: string, description: string } | null> | null };


export const GetProductsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>;