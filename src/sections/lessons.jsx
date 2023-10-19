import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import postpoo from "../assets/postpoo.avif";

const Discover = () => {
  let details = {
    tag: "The Athenaeum",
    title: "The sixth fragrance of The Realm of Virtual Reality: Urano",
    content: `There are six fragrances in the "Reality of Reality" series, each revealing a different dimension of the world, leading people to the realm between reality and imagination. Urano is a woody, spicy, resinous fragrance whose main ingredients are frankincense, hay and myrrh, and is the final chapter of this sensory journey.`,
    btnText: "Step into the sensory world of Urano",
    color: "[#333]",
  };
  return (
    <>
      <ContentAndstaticImage
        image={postpoo}
        tag={details["tag"]}
        order="21"
        title={details["title"]}
        content={details["content"]}
        btnText={details["btnText"]}
        color={details["color"]}
      ></ContentAndstaticImage>
    </>
  );
};

export default Discover;
