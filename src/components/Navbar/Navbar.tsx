import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaAddressBook,
  FaImage,
  FaBars,
} from "react-icons/fa";

import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  function scrollToTop() {
    window.scroll(0, 0);
  }

  function ChangeMobileMenuState() {
    setMobileMenu((previousState) => !previousState);
  }

  return (
    <>
      <nav className="navbar_items">
        <Link onClick={scrollToTop} className="logo_link" to="/tripaway/">
          <h1 className="navbar_logo">TripAway</h1>
        </Link>

        <div onClick={ChangeMobileMenuState} className="menu_icons">
          {mobileMenu ? (
            <FaXmark className="mobile_menu_button" />
          ) : (
            <FaBars className="mobile_menu_button" />
          )}
        </div>

        <ul className={mobileMenu ? "nav_menu active" : "nav_menu"}>
          <li onClick={ChangeMobileMenuState}>
            <Link
              onClick={scrollToTop}
              className="nav_menu_link"
              to="/tripaway/"
            >
              <FaHome className="nav_menu_icon" /> Home
            </Link>
          </li>

          <li onClick={ChangeMobileMenuState}>
            <Link
              onClick={scrollToTop}
              className="nav_menu_link"
              to="/tripaway/about"
            >
              <FaInfoCircle className="nav_menu_icon" /> About
            </Link>
          </li>

          <li onClick={ChangeMobileMenuState}>
            <Link
              onClick={scrollToTop}
              className="nav_menu_link"
              to="/tripaway/service"
            >
              <FaBriefcase className="nav_menu_icon" /> Service
            </Link>
          </li>

          <li onClick={ChangeMobileMenuState}>
            <Link
              onClick={scrollToTop}
              className="nav_menu_link"
              to="/tripaway/contact"
            >
              <FaAddressBook className="nav_menu_icon" /> Contact
            </Link>
          </li>

          <li onClick={ChangeMobileMenuState}>
            <Link
              onClick={scrollToTop}
              className="nav_menu_link"
              to="/tripaway/gallery"
            >
              <FaImage className="nav_menu_icon" /> Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
