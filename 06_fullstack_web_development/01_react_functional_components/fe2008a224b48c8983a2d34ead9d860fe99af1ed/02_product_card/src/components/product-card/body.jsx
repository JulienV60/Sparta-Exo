import React from "react";
import { v4 as uuidv4 } from "uuid";

const CardBody = (props) => {
  const [showScreenshots, setShowScreenshots] = React.useState(false);
  function showOffScreen() {
    if (showScreenshots === false) {
      setShowScreenshots(
        props.screenshots.map((element) => {
          return <img key={uuidv4()} src={element.url}></img>;
        }),
      );
    } else {
      setShowScreenshots(false);
    }
  }
  return (
    <div>
      <img src={props.cover}></img>
      <p>{props.summary}</p>
      <p>{props.firstReleaseDate}</p>
      {props.genres.map((element) => {
        if (element.name === undefined) {
          return <p key={uuidv4()}>{element}</p>;
        } else {
          return <p key={uuidv4()}>{element.name} </p>;
        }
      })}
      <button onClick={showOffScreen}>Show Screenshots</button>
      {showScreenshots}
    </div>
  );
};

export default CardBody;
