import React, { useEffect, useState } from "react";
import { AccountCircleIcon, CloseIcon, MenuIcon } from "../assets/icons/icons";
import logo from "../assets/images/newspaper.png";
import { NavLink } from "react-router-dom";
const navLink = [
  {
    navpage: "Business",
    navlink: "/business",
  },
  {
    navpage: "Entertainment",
    navlink: "/entertainment",
  },
  {
    navpage: "Health",
    navlink: "/health",
  },
  {
    navpage: "Science",
    navlink: "/science",
  },
  {
    navpage: "Sports",
    navlink: "/sports",
  },
];
export const Navbar = () => {
  const [iconState, setIconState] = useState(false);
  const [iconToggle, setIconToggle] = useState(<MenuIcon fontSize="large" />);
  const toggleIcon = () => {
    if (iconState) {
      setIconState(!iconState);
      setIconToggle(<CloseIcon fontSize="large" />);
    } else {
      setIconState(!iconState);
      setIconToggle(<MenuIcon fontSize="large" />);
    }
  };
  useEffect(() => {
    const handleCategory = () => {
      if (window.innerWidth > 769) {
        setIconState(false);
      } else {
        setIconState(true);
      }
    };
    window.addEventListener("resize", handleCategory);
  });
  console.log(iconState);
  return (
    <div className="navbar">
      <div className="navbar__items">
        <div className="items-logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="items-hamicon">
          <i onClick={toggleIcon}>{iconToggle}</i>
        </div>
        {!iconState ? (
          <div className="items-links">
            <div className="link-search">
              <input type="text" placeholder="Search for news" />
            </div>
            <div className="link-categories">
              <ul>
                {navLink.map((item) => {
                  return (
                    <li key={item.navpage}>
                      <NavLink to={item.navlink}>{item.navpage}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="link-login">
              <button>
                <span>
                  <AccountCircleIcon fontSize="large" />
                </span>
              </button>
              <button>
                <h4>Login</h4>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
