import React from 'react';
import './home.css';

import ImgComp from '../../components/img/ImgComp';
import TextComp from '../../components/textcomp/TextComp';

const Home = () => {
  return (
    <div className='home-cnt'>
      <div>
        <ImgComp />
      </div>

      <div className='home-txt-cnt'>
        <TextComp />
      </div>
    </div>
  );
};

export default Home;
