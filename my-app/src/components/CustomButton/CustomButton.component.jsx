import React from 'react'
import './CustomButton.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...buttonProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...buttonProps}>
      {children}
    </button>
  )
}

export default CustomButton