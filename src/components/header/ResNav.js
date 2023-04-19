import React from "react";
import { Link } from "react-router-dom";
import "./ResNav.css";

const ResNav = (props) => {
  const { showReversePage } = props;
  return (
    <div className="res-nav">
      <Link to="/menu" style={{ color: "#d2ae68", margin: " 0 auto" }}>
        Menu
      </Link>
      <Link to="/promotion" style={{ color: "#d2ae68", margin: " 0 auto" }}>
        Promo
      </Link>
      <Link to="/aboutus" style={{ color: "#d2ae68", margin: " 0 auto" }}>
        About Us
      </Link>
      <div
        onClick={showReversePage}
        style={{ color: "#d2ae68", margin: " 0 auto" }}
        className="res-reverse"
      >
        Reservation
      </div>
    </div>
  );
};

export default ResNav;
