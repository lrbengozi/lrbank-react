import React from "react";
import CreateAccountForm from "../CreateAccountForm";
import "./style.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about--vertical">
        <div className="about--horizontal">
          <div className="about--name">LRbank</div>
          <div className="about--description">
            <p>
              Um banco <strong>fictício</strong>, que foi criado para servir de
              portifolio!
            </p>
            <p>
              Caso tenha interesse em realizar testes nesta aplicação realize o
              cadastro abaixo.
            </p>
            <CreateAccountForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
