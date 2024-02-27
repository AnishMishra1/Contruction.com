import React from "react";

const Services = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between lg:p-[5rem] p-[2rem] h-auto bg-slate-200">
      <div className="flex flex-col items-start justify-between p-[2rem]">
        <div className="py-[1rem] ">
          <h1 className="text-3xl font-semibold font-sans">Service</h1>
        </div>
        <div className="py-[0.5rem] md:px-[15rem] px-[8rem]  border-t-2 border-gray-600"></div>
        <div className="py-[1rem]">
          <h1 className="text-2xl font-semibold ">Maintaince and Renovation</h1>
        </div>
        <div>
          <p className="text-gray-600 text-1xl">
            Maintenance and renovation are crucial aspects of construction projects, ensuring that buildings and
            infrastructure remain functional, safe, and aesthetically pleasing over time.Implementing preventive
            maintenance measures can help identify and address issues before they escalate into costly repairs. When
            planning renovations, it's important to conduct a thorough assessment of the building's current condition
            and the desired changes. This may involve consultation with architects, engineers, and other professionals
            to ensure compliance with building codes and regulations.
          </p>
        </div>
      </div>
      <div>
        <img
        className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
          src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-298.jpg?w=740&t=st=1709032140~exp=1709032740~hmac=9bc7efd5641ca445d8f9a0a6d6c5a501da3bbdf10835b11677ac0bb22a41e246"
          alt=""
        />
      </div>
    </div>
  );
};

export default Services;
