import React from 'react'
import MenuItem from '../MenuItem/MenuItem.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

import './Directory.styles.scss'

const Directory = ({sections}) => {
  return (
    <div className="menu-container">
      {sections.map(({title, imageUrl, id, size, linkUrl}) => {
        return <MenuItem imgUrl={imageUrl} title={title} key={id} size={size} linkUrl={linkUrl}/>
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);