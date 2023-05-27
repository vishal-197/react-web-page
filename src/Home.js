import React from "react";
import Nav from "./Nav";
import HeorSection from "./HeorSection";
import Top_Tranding from "./Top-Tranding";
import Trending_Tour from "./Trending-Tour";
import Categories from "./Categories";
import Luxuryexperiences from "./Luxury-experiences";
import Overview from "./Overview";
import Quick_Enquiry from "./Quick_Enquiry";
import Footer from "./Footer";
import App from "./singup";
import Login from "./Login";
import Add from "./Add";
import Top_Tour from "./Top_Tour";

// export const userData = userDetails({})

function Home() {

  
  return (
    <>
      <Nav />
      <HeorSection />
      <Top_Tranding />
      <Add/>
      <Top_Tour/>
      <Trending_Tour />
      <Categories />
      <Luxuryexperiences />
      <Overview />
      <Quick_Enquiry/>
      <Footer/>
      {/* <App/>
      <Login/> */}
    </>
  );
}

export default Home;
