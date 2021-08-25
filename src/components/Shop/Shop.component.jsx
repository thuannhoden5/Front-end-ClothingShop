import React from 'react'
import CollectionsOverview from '../CollectionsOverview/CollectionsOverview.component'
import Collection from '../Collection/Collection.component'

import { Route } from 'react-router-dom'


const Shop = ({ match }) => {
  // console.log()
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop