import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar isAboutActive="true" />
      <div className="text-center fs-4 pt-5 mt-5">
        This is a simple demo to test routing
      </div>
    </>
  );
}

export default About;
