import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';



function Header() {







return  (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Make Finding Your Parking Spot Easier</h1>
        <p>By reserving a park in advance, you can plan your commute knowing you already have a spot in our parking lot.
        You'll arrive on time, stress-free, and ready to work. </p>
  
        <div className="gpt3__header-content__input">
          <button type="button">Get Started</button>
        </div>
      </div>
  
      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
}
  
  export default Header;
  