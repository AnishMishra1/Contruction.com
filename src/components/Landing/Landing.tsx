import React from "react";
import Services from "./Subcomponent/Services";
import ServiceDetails from "./Subcomponent/ServiceDetails";
import Project from "./Subcomponent/Project";
import Middle from "./Subcomponent/Middle";
import Hero from "../Home/subComponents/Hero";
import Below from "./Subcomponent/Below";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Project />
      <Middle />
      <Services />
      <ServiceDetails />
      <Below />
    </div>
  );
};

export default Landing;
