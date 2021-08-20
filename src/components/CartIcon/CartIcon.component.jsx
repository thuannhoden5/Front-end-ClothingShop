import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.styles.scss'
import { connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleCartHidden , cartItems}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartItems}</span>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartItems: selectCartItemsCount(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)