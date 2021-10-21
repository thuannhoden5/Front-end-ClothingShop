import React from 'react';
import './MenuItem.styles.scss';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const { title, imgUrl } = props;
  console.log(props);
  return (
    <Link to={`shop/${title}`} style={{ width: '32%' }}>
      <div className="menu-item">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
