import React, { useEffect, useState } from "react";
import "./Header.css";
import ScrollEvent from "../../function/ScrollEvent";
import { Link } from "react-router-dom";
import ResNav from "./ResNav";

const Header = (props) => {
  const { showReversePage } = props;
  const [checkRes, setCheckRes] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className={`header ${ScrollEvent(0) ? "bg-show" : ""}`}>
        <Link to="/" className="header-left">
          Sona
        </Link>
        <div className="header-right">
          <Link to="/menu">Menu</Link>
          <Link to="/promotion">Promo</Link>
          <Link to="/aboutus">About Us</Link>
          <div onClick={showReversePage}>Reservation</div>
        </div>
        <i class="fa-solid fa-bars" onClick={() => setCheckRes(!checkRes)}></i>
      </div>
      {checkRes && width <= 768 && <ResNav showReversePage={showReversePage} />}
    </>
  );
};

export default Header;
