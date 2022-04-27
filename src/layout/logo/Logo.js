import React from "react";
import LogoWhite from "../../images/logo_white.svg";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      <img className="logo-light logo-img" src={LogoWhite} alt="logo" />
    </Link>
  );
};

export default Logo;
