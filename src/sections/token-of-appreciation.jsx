import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import women from "../assets/women.jpg";

const tokenOfAppreciation = () => {
  let { title, tag, content, color, btnText } = {
    tag: "Tokens of appreciation",
    title: "Corporate gifts",
    content: `Our sales consultants have a long history of pairing products that complement each other to deliver even more skin care benefits. Incorporate this time-tested practice into your skincare regimen with one of our recommended products. `,
    btnText: "Browse skincare portfolio",
    color: "[#333]",
  };
  return (
    <ContentAndstaticImage
      image={women}
      order="12"
      tag={tag}
      title={title}
      content={content}
      btnText={btnText}
      color={color}
    ></ContentAndstaticImage>
  );
};

export default tokenOfAppreciation;
