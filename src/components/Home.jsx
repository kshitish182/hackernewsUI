import React from 'react';
import Header from './Header';
import { getAllData } from '../utils/http';

const Home = () => {
  getAllData();

  return <Header />;
};

export default Home;
