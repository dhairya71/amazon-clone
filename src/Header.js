import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg"
        alt="logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Dhairya!</span>
          <span className="header__optionLineTwo">Sign Out</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Dhairya!</span>
          <span className="header__optionLineTwo">Sign Out</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello Dhairya!</span>
          <span className="header__optionLineTwo">Sign Out</span>
        </div>
        <ShoppingCartIcon className="header__cart" />
        <div className="cart__value">0</div>
      </div>
    </div>
  );
}

export default Header;
