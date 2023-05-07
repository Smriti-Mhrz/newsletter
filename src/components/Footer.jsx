import React from "react";
import logo from "../assets/images/newspaper.png";
import { NavLink } from "react-router-dom";
import { AccountCircleIcon, CloseIcon, MenuIcon } from "../assets/icons/icons";

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
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="items-links">
          <div className="link-search">
            <input type="text" placeholder="Search for news" />
          </div>
          <div className="link-wrapper">
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
        </div>
        <div className="copyright">
          <p>
            <span>&copy;</span>
            Copyright 2023. Intern practice project.
          </p>
        </div>
      </div>
    </div>
  );
};
