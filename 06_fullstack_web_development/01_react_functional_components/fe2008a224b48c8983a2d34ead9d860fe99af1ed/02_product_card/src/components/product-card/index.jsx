import React from "react";
import zelda from "../../../data/zelda";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
const ProductCard = () => {
  return (
    <div>
      <CardHeader name={zelda.name} platformLogos={zelda.platforms} />
      <CardBody
        cover={zelda.cover.url}
        summary={zelda.summary}
        firstReleaseDate={zelda.first_release_date}
        screenshots={zelda.screenshots}
        genres={zelda.genres}
      />
      <CardFooter slug={zelda.slug} />
    </div>
  );
};

export default ProductCard;
