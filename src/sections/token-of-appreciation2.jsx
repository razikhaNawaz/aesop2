import React from "react";
import ContentAndstaticImage from "../components/content-staticimage";
import women2 from "../assets/women2.jpg";

const tokenOfAppreciation2 = () => {
  let { title, tag, content, color, btnText } = {
    tag: "Book a Facial Treatment",
    title: "Calms skin and senses",
    content: `Aesop Facial Services offer you a range of unique treatments to help balance, awaken and hydrate your skin. Make full use of the interrelationship between the senses and the mind, and restructure the cellular balance through massaging the skin. During each facial treatment, professionally trained Aesop facial therapists will use rhythmic and consistent pressure, combined with Aesop products, to help soothe and repair the skin. `,
    btnText: "Learn more",
    color: "[#333]",
  };
  return (
    <ContentAndstaticImage
      image={women2}
      order="12"
      tag={tag}
      title={title}
      content={content}
      btnText={btnText}
      color={color}
    ></ContentAndstaticImage>
  );
};

export default tokenOfAppreciation2;