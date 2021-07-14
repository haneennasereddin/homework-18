import React from "react";
import "./style.css";

const Tools = () => {
  return (
    <div>
      <section className="container">
        <h1 class="skills">
          <i class="fas fa-tools"></i>
          #tools
        </h1>
        <hr />
        <div id="{tools}" class="row container toolsCards">
          <div class="col-sm-12 col-md-6 toolCol">
            <div class="card toolCard">
              <div class="card-header toolHeader">Creating:</div>
              <ul id="#tools" class="createList">
                <li class="createItem">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/vs-code.png"}
                    alt="visual studio code icon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="miroIcon"
                    src={process.env.PUBLIC_URL + "/icons/miro.png"}
                    alt="miroboard tool icon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="gitHubIcon"
                    src={process.env.PUBLIC_URL + "/icons/github1.png"}
                    alt="gitHub icon"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 toolCol">
            <div class="card toolCard">
              <div class="card-header toolHeader">Connecting/Organizing:</div>
              <ul class="createList">
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src={process.env.PUBLIC_URL + "/icons/slack-logo.png"}
                    alt="slack icon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src={process.env.PUBLIC_URL + "/icons/airtable.png"}
                    alt="airtableIcon"
                  />
                </li>
                <li class="createItem">
                  <img
                    class="listIcons2"
                    src={process.env.PUBLIC_URL + "/icons/google-sheets.png"}
                    alt="googleIcon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
