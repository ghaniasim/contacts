import React from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

function Card(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/details/${props.id}`);
  }

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://iau.edu.lc/wp-content/uploads/2016/09/dummy-image.jpg"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      </div>
      <div className="lower-container">
        <h3>{props.name}</h3>
        <h6>@{props.username}</h6>
        <p>https://{props.website}</p>
        <Button title="More details" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Card;
