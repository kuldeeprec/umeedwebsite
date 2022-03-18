import React, { Component } from "react";
import "./Navbar.css";

import { BiHomeCircle, BiDonateHeart } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { Link } from "react-router-dom";
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
            <Link to="/" className="logo-display">
              <img
                className="logo-display"
                src="../../assets/img/u-logo1.jpeg"
                alt="logo is not display"
              />
            </Link>

            <div className="u-name">
              <span style={{ display: "block" }}>
                उम्मीद राजकीय इंजीनियरिंग कॉलेज सोनभद्र
              </span>
              <span>Umeed Rajkiya Engineering College Sonbhadra</span>
            </div>
          </div>
          <div className="c-logo">
            <Link to="/" className="logo-display">
              <img
                className="picture"
                src="../../assets/img/college logo.jfif"
                alt="logo is not display"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-header">
          <li className="first leaf">
            <Link to="/about">
              <span className="icon">
                <BiHomeCircle />
              </span>

              <span>home</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <RiAdminFill />
              </span>
              <span>Admin</span>
            </Link>
            <ul className="expanded">
              <Link to="/about">
                <li className="expanded-item">fist</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">second</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">third</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">forth</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <HiOutlineAcademicCap />
              </span>
              <span>Academics</span>
            </Link>
            <ul className="expanded">
              <Link to="/about">
                <li className="expanded-item">fist</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">second</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">third</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">forth</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <FaServicestack />
              </span>
              <span>Facilites</span>
            </Link>
            <ul className="expanded">
              <Link to="/about">
                <li className="expanded-item">fist</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">second</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">third</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">forth</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <MdPermMedia />
              </span>
              <span>Gallery</span>
            </Link>
            <ul className="expanded">
              <Link to="/about">
                <li className="expanded-item">fist</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">second</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">third</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">forth</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <GiNewspaper />
              </span>
              <span>Media</span>
            </Link>
            <ul className="expanded">
              <Link to="/about">
                <li className="expanded-item">fist</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">second</li>
              </Link>
              <Link to="/about">
                <li className="expanded-item">third</li>
              </Link>
              <Link to="/">
                <li className="expanded-item">forth</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <BiDonateHeart />
              </span>
              <span>Donation</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <HiOutlineMail />
              </span>
              <span>ConntactUs</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <AiOutlineInsertRowAbove />
              </span>
              <span>AboutUs</span>
            </Link>
          </li>
        </div>
      </>
    );
  }
}

export default NavBar;
