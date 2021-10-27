import React from 'react';
import './homepage.styles.scss';
import Directory from '../Directory/Directory.component';
import Slidebar from '../slidebar/Slidebar';
import CustomNavbar from '../Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="homepage">
      <CustomNavbar />
      <Slidebar />
      <Directory />
    </div>
  );
};

export default HomePage;
