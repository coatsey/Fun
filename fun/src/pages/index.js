import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} onClick={toggle} />
      <Sidebar onClick={toggle} />
    </>
  );
};

export default Home;
