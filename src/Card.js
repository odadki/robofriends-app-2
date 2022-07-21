import React, { useState } from "react";
import "./Card.css";
// import MoreDetails from "./MoreDetails";

const Card = ({ name, email, id, phone, username, website }) => {
  const [moreInfoBtn, setMoreInfoBtn] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const moreInfo = () => {
    setMoreInfoBtn(!moreInfoBtn);
    setUserDetails((current) => !current);
  };

  return (
    <div className="robo-card tc bg-light-green dib br4 ma2 shadow-5 ph2 pb3 items-start">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <button className="card-button" onClick={moreInfo}>
          {moreInfoBtn ? "Show less" : "Show Details"}
        </button>
        {userDetails && (
          <div>
            <ul className="card-ul">
              <li>
                <span className="card-tag">Username:</span> {username}
              </li>
              <li>
                <span className="card-tag">Email:</span> {email}
              </li>
              <li>
                <span className="card-tag">Phone:</span> {phone}
              </li>
              <li>
                <span className="card-tag">Website:</span> {website}
              </li>
            </ul>
          </div>
        )}
        {/* <p>{email}</p> */}
        {/* <MoreDetails /> */}
      </div>
    </div>
  );
};
export default Card;
