import React from "react";

const PlatformPage = (): JSX.Element => {
  const [data, dataSet] = React.useState([<></>]);
  const [idData, idDataSet] = React.useState<string[]>([]);
  React.useEffect(() => {
    async function fetchApi() {
      const response = await fetch("https://videogame-api.fly.dev/platforms");
      const json = await response.json();
      console.log(json);
      const platformsName = json.platforms.map((element: any) => {
        idDataSet([idData, element.id]);
        return <>{element.name}</>;
      });

      dataSet(platformsName);
    }
    fetchApi();
  }, []);
  {
    console.log(idData);
  }
  return (
    <div>
      <p>{data}</p>
      <p>{idData}</p>
    </div>
  );
};

export default PlatformPage;
