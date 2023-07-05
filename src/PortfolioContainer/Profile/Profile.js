import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function componentName() {
  return (
    
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/avinash-kumar-patel-6a56a01ba/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/avinash_kumar_patel_01/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/Avipatel129">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span>
              {" "}
              Hello, I'M <span className="highlighted-text">Avinash Kumar Patel</span>
            </span>
          </div>
            A passionate Full Stack Software Developer.
          <div className="despription"></div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> 
            {" "}
            Hire Me {" "}
             </button>
            <a href="Avinash.pdf" target="_blank">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
