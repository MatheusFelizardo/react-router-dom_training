import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="HeaderNav">
      <NavLink className="btn" to="/">
        Produtos
      </NavLink>
      <NavLink className="btn" to="contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
