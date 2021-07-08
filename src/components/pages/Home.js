import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Form from "../Form";
import List from "../List";

function Home() {
  return (
    <>
      <HeroSection />
      <Form />
      <List />
      <Footer />
    </>
  );
}

export default Home;
