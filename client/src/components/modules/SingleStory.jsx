import React from "react";

import  "./Card.css";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      <div className="Card-storyUser"> {props.Nickname} </div>
      <div className="Card-storyContent">This is a SingleStory!</div>
    </div>
  );
};

export default SingleStory;
