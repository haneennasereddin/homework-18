import React from "react";
import db from "../../data/db.json";
import "./style.css";
import { Link } from "react-router-dom";
import Projects from "../Projects/Projects"

const Applications = () => {
  const applications = db.applications;

  return (
    <div>
      {applications.map((app) => {
        return (
         <Projects 
         id={app.id} 
         title={app.title} 
         body={app.body} 
         technologies={app.technologies} 
         repo={app.repo}
         deployedApp = {app.deployedApp}
         imageURL = {app.imageUrl}
         imageAlt = {app.imageAlt}
         />
        );
      })}
      <hr></hr>
      <div>
        <button type="button" class="projBtns">
          <Link class="projLinks" alt="back to home" to="/">
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Applications;

