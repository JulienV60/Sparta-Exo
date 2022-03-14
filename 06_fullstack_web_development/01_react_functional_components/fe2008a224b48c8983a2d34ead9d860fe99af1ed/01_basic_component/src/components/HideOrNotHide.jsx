import React from "react";

export const HideOrNotHide = () => {
  const [showButton, setShowButton] = React.useState("Hello Julien");
  const [showP, setShowP] = React.useState(<p>Remember who you are and where u begin</p>);
  return (
    <div>
      <button
        onClick={() => {
          setShowButton("U doing great!");
          setShowP(false);
        }}
      >
        {showButton}
      </button>
      {showP}
    </div>
  );
};
