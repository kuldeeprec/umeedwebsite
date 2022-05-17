import React, { Component } from "react";
import "./About.css";
import { NavBar, Footer } from "./";
class About extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <div className="sectiona">
            <div className="containera" align="row-wise">
              <div className="content-sectiona">
                <div className="image-sectiona">
                  <div className="centered1">A MISSION</div>
                  <div className="centered2">WITH A VISION</div>
                  <div className="centered3">educating childs since 2019</div>
                </div>
                <div className="title">
                  <h1>ABOUT US</h1>
                </div>
                <div className="content">
                  <h3>
                    Save the Children is India’s leading independent child
                    rights’ NGO, which works in 18 states of the country.
                    Beginning its journey in 2008 in India, and registered as
                    ‘Bal Raksha Bharat’, we have changed the lives of more than
                    11 million (1.1 crore) children.
                  </h3>
                  <p>
                    Save the Children is India’s leading independent child
                    rights’ NGO, which works in 18 states of the country.
                    Beginning its journey in 2008 in India, and registered as
                    ‘Bal Raksha Bharat’, we have changed the lives of more than
                    11 million (1.1 crore) children.<span id="dots">...</span>
                    <span id="more">
                      {" "}
                      We firmly believe that every child deserves the best
                      chance for a bright future, which is why, we are fiercely
                      committed to ensure that children not only survive, but
                      thrive. With a bold ambition and a powerful vigilance, we
                      do whatever it takes to save the children.
                    </span>
                  </p>
                  {}
                </div>
              </div>
              <div className="diva1">
                <h3>Every child receives basic quality education</h3>
              </div>
              <div className="diva2">
                <h3>
                  Education is the most powerful weaopen You can use to change
                  the World
                </h3>
              </div>
              <div className="diva3">
                <h3>
                  Build a world in which every child has the right to survival,
                  protection, development, and participation
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="about-grid-container">
            <div className="about-grid-item">
              <h2>OUR Mission</h2>
              <p>
                Our mission is to make this world a better place where every
                body lives happily with harmony by caring sharing with love for
                each other and promoting the universal brotherhood of mankind.
                We strive to eradicate poverty, illiteracy every other problem
                on the Earth, so that we give the coming generations a better
                world to live by wiping every tear and removing all the
                sorrows....only with a desire to see a smile on every child's
                face...!!!
              </p>
            </div>
            <div className="about-grid-item">
              <h2>OUR Vision</h2>
              <p>
                Our mission is to make this world a better place where every
                body lives happily with harmony by caring sharing with love for
                each other and promoting the universal brotherhood of mankind.
                We strive to eradicate poverty, illiteracy every other problem
                on the Earth, so that we give the coming generations a better
                world to live by wiping every tear and removing all the
                sorrows....only with a desire to see a smile on every child's
                face...!!!
              </p>
            </div>
          </div>
        </div> */}
        <Footer />
      </>
    );
  }
}

export default About;
