import React from 'react'
import './Collection.styles.scss'
import { connect } from 'react-redux'

import CollectionItem from '../CollectionItem/Collectiontem.component'
import { selectCollection } from '../../redux/shop/shop.selectors'

const Collection = ({collection}) => {
  // console.log('collection', collection)
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map(item => <CollectionItem className='collection-item' key={item.id} item={item}/> )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)