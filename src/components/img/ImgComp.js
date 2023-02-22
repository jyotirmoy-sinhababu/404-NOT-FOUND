import React from 'react';

import './imgStyle.css';

import Img from '../../Images/Scarecrow.png';

const ImgComp = () => {
  return (
    <div className='img-cnt'>
      <img className='img' src={Img} alt='not found' />
    </div>
  );
};

export default ImgComp;
