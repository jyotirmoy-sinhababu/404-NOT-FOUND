import React from 'react';
import './home.css';

import ImgComp from '../../components/img/ImgComp';
import TextComp from '../../components/textcomp/TextComp';

const Home = () => {
  return (
    <div className='home-cnt'>
      <ImgComp />
      <TextComp />
    </div>
  );
};

export default Home;
