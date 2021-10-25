import React from "react";
import "./style.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about--vertical">
        <div className="about--horizontal">
          <div className="about--name">LRbank</div>
          <div className="about--description">
            Um banco <strong>fictício</strong>, diferente que foi criado para
            servir de portifolio
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
