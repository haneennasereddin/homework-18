import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import PDF from "../../../src/asset/Resume.pdf";

const Header = () => {
  return (
    <header className="container-fluid site-header">
      <div className="nameJob">
        <Link to="/">
          <img
            alt="profile"
            className="profilepic"
            src={process.env.PUBLIC_URL + "/assets/profilepic.jpg"}
          />
        </Link>
        <div className="inline">
          <h1 className="display-4">
            <span id="wave"></span> I AM HANEEN NASEREDDIN
          </h1>
          <h4 className=""></h4>
        </div>
        <ul className="site-headerUL">
          <li className="nav-li">
            <a
              className="nav-a"
              href={PDF}
              target="_blank"
              rel="noreferrer"
              alt="Resume"
            >
              RESUME
            </a>
          </li>
          <li className="nav-li">
            <Link id="prjPage" className="nav-a" to="/projects">
              MY WORK
            </Link>
          </li>
          <li className="nav-li" id="navSkills">
            <Link className="nav-a" to="/reccos">
              REVIEWS
            </Link>
          </li>
          <li className="nav-li" id="navTools">
            <Link className="nav-a" to="/contact">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;