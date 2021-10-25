import React, { useEffect } from "react";
import { MoreHoriz } from "@material-ui/icons";

import "./style.scss";

const Header = () => {
  console.log(window.innerWidth);
  return (
    <header>
      <div className="header--logo">
        <h2>LRBank</h2>
      </div>
      <div className="header--userLogin">
        {window.innerWidth > 760 && (
          <div>
            <input type="text" placeholder="conta" />
            <input type="text" placeholder="senha" />
            <button>Acessar a conta</button>
          </div>
        )}
        {window.innerWidth <= 760 && (
          <div>
            <MoreHoriz
              style={{ fontSize: 35, color: "#fff", marginRight: 0 }}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
