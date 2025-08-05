import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Types from "./components/Types";
import Services from "./components/Services";
import Productsgrid from "./components/Productsgrid";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Insta from "./components/Insta";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <Productsgrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </>
  );
};

export default HomePage;
