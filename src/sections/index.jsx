import Nav from "./nav";

import React from "react";
import Hero from "./hero";
import Domestic from "./domestic-section";
import SkinCare from "./skin-care";
import TokenOfAppreciation from "./token-of-appreciation";
import Locator from "./store-locator";
import Footer from "./footer";
import Discover from "./lessons";
import TokenOfAppreciation2 from "./token-of-appreciation2";
const index = () => {
  return (
    <>
      <Hero></Hero>
      
      <Discover></Discover>
      <Domestic></Domestic>
      <TokenOfAppreciation></TokenOfAppreciation>
      <SkinCare></SkinCare>
      <Locator></Locator>
      <TokenOfAppreciation2></TokenOfAppreciation2>
      <Footer></Footer>
    </>
  );
};

export default index;
