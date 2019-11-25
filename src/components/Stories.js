import React from "react";
// import styles from './Stories.module.css';

const things = new Array(100).fill(null);

function Stories(props) {
  return (
    <div className="StoriesRoot">
      <div className="StoriesBackgroundPostiion StoriesBackgroundImage" />
      <div className="StoriesBackgroundPostiion StoriesBackgroundOverlay" />
      <div>
        {things.map((n, i) => (
          <p>HELLOOOOOOO {i}</p>
        ))}
      </div>
    </div>
  );
}

export default Stories;
