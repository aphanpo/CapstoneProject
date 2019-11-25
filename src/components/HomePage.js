import React from "react";
import Icon from "../lib/Icon";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

function HomePage(props) {
  return (
    <>
      <div className="homepage">
        <header >
          <h1 className="pageHeader">
            <Icon icon="angle-double-left"></Icon> EmpowHER{" "}
            <Icon icon="angle-double-right"></Icon>
          </h1>
        </header>
        <div className="top">
          <div className="beauty">
            <p className="HomePageLink makeup">
              <Link to="#">Makeup</Link>
            </p>
          </div>

          <div className="hairstyles">
            <p className="HomePageLink hair">
              <Link to="#">Hairstyles</Link>
            </p>
          </div>

          <div classNamy="crafts">
            <p className="HomePageLink diy">
              <Link to="#">DIY</Link>
            </p>
          </div>
        </div>

        <div className="mid">
          <div className="self">
            <p className="HomePageLink selfcare">
              <Link to="#">Self Care</Link>
            </p>
          </div>

          <div className="barriers">
            <p className="HomePageLink female">
              <Link to="/stories">Female Stories</Link>
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="share">
            <p className="HomePageLink sharing">
              <Link to="/Intake">Have a story to share?</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
