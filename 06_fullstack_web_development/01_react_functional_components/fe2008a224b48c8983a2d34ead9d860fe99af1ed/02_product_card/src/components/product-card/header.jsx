import React from "react";
import { v4 as uuidv4 } from "uuid";

const CardHeader = (props) => {
  return (
    <div>
      {props.platformLogos.map((element) => {
        if (element.slug === undefined) {
          return <img key={uuidv4()} src={element.platform_logo} />;
        } else {
          return <img key={uuidv4()} src={element.platform_logo.url} />;
        }
      })}
      <p>{props.name}</p>
    </div>
  );
};

export default CardHeader;
