import React from "react";
import { About, Footer, Header, Hero, ScrollToTop } from "../../components";

const HomePage = () => {
  return (
    // <div className="container max-w-5xl mt-33 mx-auto px-2">
    <>
      <Header />
      <ScrollToTop />
      <Hero />
      <About />
      {/* <h1>HomePage</h1> */}
      <Footer />
    </>
    // </div>
  );
};

export default HomePage;
