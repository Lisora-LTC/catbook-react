import React from "react";

// TODO (ste12): import Card.css

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
      <h1>{props.Nickname}</h1>
      This is a SingleStory!
    </div>
  );
};

export default SingleStory;
