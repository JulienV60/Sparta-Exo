import React from "react";

const PlatformPage = (): JSX.Element => {
  const [game, setGame] = React.useState(null);
  React.useEffect(() => {
    fetch("https://videogame-api.fly.dev", { headers: { Accept: "application/json" } })
      .then((response) => response.json())
      .then((data) => setGame(data));
  }, [game]);
  return <div>Hello{game}</div>;
};

export default PlatformPage;
