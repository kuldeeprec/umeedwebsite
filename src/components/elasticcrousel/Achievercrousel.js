import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
class Achievercrousel extends Component {
  render() {
    return (
      <div>
        <Carousel itemsToShow={2} enableAutoPlay autoPlaySpeed={1500}>
          <img
            src={process.env.PUBLIC_URL + `/Imgs/cmp.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
          <img
            src={process.env.PUBLIC_URL + `/Imgs/cmp2.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
          <img
            src={process.env.PUBLIC_URL + `/Imgs/cmp.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
          <img
            src={process.env.PUBLIC_URL + `/Imgs/cmp2.jpg`}
            alt="item1"
            style={{ width: "25rem", height: "20rem" }}
          />
        </Carousel>
      </div>
    );
  }
}

export default Achievercrousel;
