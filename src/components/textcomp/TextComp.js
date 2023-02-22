import React from 'react';

import './text.css';

const TextComp = () => {
  return (
    <div className='text-cnt'>
      <p className='alert-txt'>I have bad news for you</p>
      <p className='msg-txt'>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <div className='btn-cnt'>
        <button className='btn'>BACK TO HOMEPAGE</button>
      </div>
    </div>
  );
};

export default TextComp;
