import React, { useState } from "react";
import "../../utilities.css";
import "./Profile.css";
import CatHappiness from "../modules/CatHappiness.jsx";

const Profile = () => {
  const [catHappiness, setCatHappiness] = useState(0);
  const incrementCatHappiness = () => {
    setCatHappiness(catHappiness+1);
    // TODO Step 2a: Implement function to update the state of cat happiness when user clicks on picture
  };
  return (
    <div>
      {/* TODO Step 2b: Call incrementCatHappiness whenever the profile picture is clicked */}
      <div className="Profile-avatarContainer">
        <div className="Profile-avatar" onClick={incrementCatHappiness}/>
      </div>
      <h1 className="Profile-name u-textCenter">Lisora</h1>
      <hr className="Profile-line" />
      <div className="u-flex">
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            Extra Challenge: Modify catbook to show a personalized description here!
          </div>
        </div>
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">CatHappiness</h4>
          <CatHappiness 
            catHappiness={catHappiness} 
          />
        </div>
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
          <div id="favorite-cat">柯基</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
