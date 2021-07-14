import React from "react";

const Projects = ({
  id,
  title,
  body,
  technologies,
  repo,
  deployedApp,
  imageURL,
  imageAlt,
}) => {
  return (
    <div>
      <div className="row container">
        <div className="col-sm-12 col-md-4 projInfo" key={id}>
          <h2 className="projTitle">{title}</h2>
          <hr></hr>
          <p>{body}</p>
          <h2 className="projTitle">Technologies</h2>
          <hr></hr>
          <p>{technologies}</p>
          <button type="button" class="projBtns">
            <a class="projLinks" rel="noreferrer" target="_blank" href={repo}>
              GitHub
            </a>
          </button>
          <button type="button" class="projBtns">
            <a
              class="projLinks"
              rel="noreferrer"
              target="_blank"
              href={deployedApp}
            >
              Deployed App
            </a>
          </button>
        </div>
        <div className="col-sm-12 col-md-8">
          <a className="prjPicLink" href={deployedApp}>
            <img
              className="img-fluid"
              id="projPix"
              src={process.env.PUBLIC_URL + imageURL}
              alt={imageAlt}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
