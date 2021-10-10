import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import { addCartItems } from '../../redux/cart/cart.actions'

import './CollectionItem.styles.scss'

const CollectionItem = ({ addCartItems, item }) => {
  const { imageUrl, name, price } = item
  // console.log(cartItems)
  // console.log(props)
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItems(item)}> Add To Cart </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addCartItems: item => dispatch(addCartItems(item))
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem)
