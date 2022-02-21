import React, { Component } from "react";
import "./Navbar.css";

import { BiHomeCircle, BiDonateHeart } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";

import { RiAdminFill } from "react-icons/ri";
import { HiOutlineAcademicCap, HiOutlineMail } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";
// import { GrGallery } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";

import { GiNewspaper } from "react-icons/gi";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="u-logo-and-u-name">
            <a href="/" className="logo-display">
              <img
                className="logo-display"
                src="../../assets/img/u-logo1.jpeg"
                alt="logo is not display"
              />
            </a>

            <div className="u-name">
              <span style={{ display: "block" }}>
                उम्मीद राजकीय इंजीनियरिंग कॉलेज सोनभद्र
              </span>
              <span>Umeed Rajkiya Engineering College Sonbhadra</span>
            </div>
          </div>
          <div className="c-logo">
            <a href="/" className="logo-display">
              <img
                className="picture"
                src="../../assets/img/college logo.jfif"
                alt="logo is not display"
              />
            </a>
          </div>
        </div>
        <div className="navbar-header">
          <li className="first leaf">
            <a href="/">
              <span className="icon">
                <BiHomeCircle />
              </span>

              <span>home</span>
            </a>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <RiAdminFill />
              </span>
              <span>Admin</span>
            </a>
            <ul className="expanded">
              <a href="/">
                <li className="expanded-item">fist</li>
              </a>
              <a href="/">
                <li className="expanded-item">second</li>
              </a>
              <a href="/">
                <li className="expanded-item">third</li>
              </a>
              <a href="/">
                <li className="expanded-item">forth</li>
              </a>
            </ul>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <HiOutlineAcademicCap />
              </span>
              <span>Academics</span>
            </a>
            <ul className="expanded">
              <a href="/">
                <li className="expanded-item">fist</li>
              </a>
              <a href="/">
                <li className="expanded-item">second</li>
              </a>
              <a href="/">
                <li className="expanded-item">third</li>
              </a>
              <a href="/">
                <li className="expanded-item">forth</li>
              </a>
            </ul>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <FaServicestack />
              </span>
              <span>Facilites</span>
            </a>
            <ul className="expanded">
              <a href="/">
                <li className="expanded-item">fist</li>
              </a>
              <a href="/">
                <li className="expanded-item">second</li>
              </a>
              <a href="/">
                <li className="expanded-item">third</li>
              </a>
              <a href="/">
                <li className="expanded-item">forth</li>
              </a>
            </ul>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <MdPermMedia />
              </span>
              <span>Gallery</span>
            </a>
            <ul className="expanded">
              <a href="/">
                <li className="expanded-item">fist</li>
              </a>
              <a href="/">
                <li className="expanded-item">second</li>
              </a>
              <a href="/">
                <li className="expanded-item">third</li>
              </a>
              <a href="/">
                <li className="expanded-item">forth</li>
              </a>
            </ul>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <GiNewspaper />
              </span>
              <span>Media</span>
            </a>
            <ul className="expanded">
              <a href="/">
                <li className="expanded-item">fist</li>
              </a>
              <a href="/">
                <li className="expanded-item">second</li>
              </a>
              <a href="/">
                <li className="expanded-item">third</li>
              </a>
              <a>
                <li className="expanded-item">forth</li>
              </a>
            </ul>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <BiDonateHeart />
              </span>
              <span>Donation</span>
            </a>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <HiOutlineMail />
              </span>
              <span>ConntactUs</span>
            </a>
          </li>
          <li className="leaf">
            <a href="/">
              <span className="icon">
                <AiOutlineInsertRowAbove />
              </span>
              <span>AboutUs</span>
            </a>
          </li>
        </div>
      </>
    );
  }
}

export default NavBar;
