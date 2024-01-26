import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/tripaway/">Home</Link>
      <Link to="/tripaway/about">About</Link>
      <Link to="/tripaway/contact">Contact</Link>
      <Link to="/tripaway/service">Service</Link>
      <Link to="/tripaway/gallery">Gallery</Link>
    </div>
  );
};

export default Navbar;
