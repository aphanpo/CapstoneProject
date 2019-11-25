import React from "react";
import Icon from "../lib/Icon";
import "../styles/shareform.css";
import { Link } from "react-router-dom";

function ShareForm(props) {
  return (
    <div className="shareFormContainer">
      <header>
        <h4 className="pageHeader">
          Yassssss Girl! <br />
          Now, it's your time to shine <Icon icon="star-o"></Icon> !
        </h4>
      </header>
      <div className="storyTitle">
        <label htmlFor="storyTitle">Title: </label>
        <input className="titleInput"></input>
      </div>
      <div>
        <img
          className="backgroundImage"
          src="https://images.pexels.com/photos/1303835/pexels-photo-1303835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ></img>
      </div>
      <textarea
        className="textArea"
        placeholder="Girl, share your truth!"
      ></textarea>
      <Link to="/stories" id="shareMyStory">
        Click to share your story now!
      </Link>
    </div>
  );
}

export default ShareForm;
