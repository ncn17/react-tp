import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const InjectNavActive = ({ isActive }) => {
    return isActive ? "nav-active" : "";
  };

  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to={"/"} className={InjectNavActive}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={InjectNavActive}>
            à propos
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blog"} className={InjectNavActive}>
            blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
