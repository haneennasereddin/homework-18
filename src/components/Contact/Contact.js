import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container airTableForm">
      <h1 className="contactTitle">Work with me!</h1>
      <p id="contactP">
        Enter your information in below! {" "}
      </p>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrBkCv7x9sdKyTF4?backgroundColor=purple"
        frameborder="0"
        title="airtableContact"
        onmousewheel=""
        width="100%"
        height="926"
      ></iframe>
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

export default Contact;
