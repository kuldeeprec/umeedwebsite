import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
class Newscrousel extends Component {
  render() {
    return (
      <div>
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={1500}>
          <img
            src={process.env.PUBLIC_URL + `/Imgs/news1.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
          <img
            src={process.env.PUBLIC_URL + `/Imgs/news1.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
        </Carousel>
      </div>
    );
  }
}

export default Newscrousel;
