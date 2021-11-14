import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        src=""
        alt="logo"
        src="https://s.tmimgcdn.com/scr/800x500/66900/online-shopping--e-commerce-shop-logo-template_66914-original.jpg"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne"> Hello User </span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </Link>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne"> Sign Out </span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne"> Your </span>
          <span className="header__optionLineTwo"> Basket </span>
        </div>
      </Link>
      {/*basket icon */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />

          <span classname="header_optionLineTwo header__basketCount">3</span>
        </div>
      </Link>
    </nav>
  );
}
export default Header;
