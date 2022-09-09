import "./home.css";
import React from 'react'
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";

import Slider from "./components/Slider";

function Home() {
  

  return (
    <div className="App">
      
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Your Parking Lots Are On Track"}
        subtitle={
          "VIP Offers Quick Reservation For Your Clients"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Expand Your Horizons"}
        subtitle={"VIP Offers Advanced Payment Methods For Your Clients"}
        flipped={true}
      />
    </div>
  );
}

export default Home;

  