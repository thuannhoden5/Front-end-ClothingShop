import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem/MenuItem.component';

import './Directory.styles.scss';

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);
  return (
    <div className="menu-container">
      {sections.map(({ title, imageUrl, id }) => {
        return <MenuItem imgUrl={imageUrl} title={title} key={id} />;
      })}
    </div>
  );
};
export default Directory;
