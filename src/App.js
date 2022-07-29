import React from "react";

// import components
import Header from "./components/Header";
import About from "./components/About";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
  return (
    <div className="bg-white relative">
      <Header />
      <About />
      <Music />
      <Banner />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
