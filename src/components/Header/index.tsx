import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <h2>LRBank</h2>
      </div>
      <div className="header--userLogin">
        <input type="text" placeholder="conta" />
        <input type="text" placeholder="senha" />
        <button>Acessar a conta</button>
      </div>
    </header>
  );
};

export default Header;
