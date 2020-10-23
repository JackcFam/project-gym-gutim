import React from "react";
import Banner from "./Banner";
import AboutHome from "./AboutHome";
import Services from "./Services";
import ClassHome from "./ClassHome";
import Stories from "./Stories";
import Trainer from "./Trainer";
import TopNews from "./TopNews";
import BackToTop from "../BackToTop";


function Home(props) {
  return (
    <>
      {/* banner of home */}
      <Banner></Banner>
      {/* about us of home */}
      <AboutHome></AboutHome>
      {/* dich vu of home */}
      <Services></Services>
      {/* Classes Home Begin */}
      <ClassHome></ClassHome>
      {/* Teacher of Home */}
      <Trainer></Trainer>
      {/* success Story */}
      <Stories></Stories>
      {/* BLOG hOME */}
      <TopNews></TopNews>
      <BackToTop></BackToTop>
      
    </>
  );
}

export default Home;
