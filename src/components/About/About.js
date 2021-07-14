import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="wrapper container">
      <div className="row">
        <section className="aboutMeCard">
          <div className="card aboutMe">
            <h5 className="card-header aboutMeHeader">
              <code className="code"> ABOUT ME</code>
            </h5>
            <div className="card-body">
              <p className="card-text">
              Skilled Account Executive & Marketing Graduate with over 4 years of experience in building effective, intuitive strategies, as well as leveraging techniques to promote products, services, and public image, in a variety of industries. Extensive experience in reaching out to the market and cultivating customers' interests in products/services in ways that strengthen the company's reputation and facilitate continuous growth. Contributing to the planning and execution of advertising and promotional marketing campaigns, while also enhancing engagement through social media channels. Continually exceeds expectations by creating valuable partnerships and works well with people at all levels of the organization, including stakeholders, customers, vendors, and team members.
              </p>
              {/* <!-- contact me --> */}
              <div className="btnFormatting">
                <a href="https://www.linkedin.com/in/haneennasereddin/" target="_blank" rel="noreferrer" className="btn btn-secondary icons">
                  <i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/haneennasereddin" target="_blank" rel="noreferrer" className="btn btn-secondary icons"
                ><i className="fab fa-github"></i></a>
                <a href="haneennasereddin1@gmail.com" target="_blank" rel="noreferrer" className="btn btn-secondary icons">
                  <i className="fas fa-envelope-open-text"></i></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br></br>
      <hr></hr>
    </div>
  );
};

export default About;