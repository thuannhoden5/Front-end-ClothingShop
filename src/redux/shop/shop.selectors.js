import { createSelector } from 'reselect'

const selectShop = state => state.collections

export const selectShopCollections = createSelector(
  [selectShop],
  collection => collection.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
); 

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
  )