import React from "react";
import { LinkedIn } from "@material-ui/icons";

import About from "../../components/About";
import Header from "../../components/Header";

import "./style.scss";

function LoginPage() {
  return (
    <div className="page">
      <Header />
      <About />
      <footer>
        Página desenvolvida por{" "}
        <a href="https://www.linkedin.com/in/lrbengozi/" target="blank">
          {" "}
          Luiz Rogério Bengozi{" "}
        </a>
        para portifólio de projetos. <br />
        <a href="https://www.linkedin.com/in/lrbengozi/" target="blank">
          <LinkedIn style={{ fontSize: 35 }} />
        </a>
      </footer>
    </div>
  );
}

export default LoginPage;
