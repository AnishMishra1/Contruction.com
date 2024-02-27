import React from "react";

const Project = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between lg:p-[5rem] p-[2rem] h-auto bg-slate-200">
      <div className="flex flex-col items-start justify-between p-[2rem]">
        <div className="py-[1rem] ">
          <h1 className="text-3xl font-semibold font-sans">Project</h1>
        </div>
        <div className="py-[0.5rem] md:px-[15rem] px-[8rem]  border-t-2 border-gray-600"></div>
        <div className="py-[1rem]">
          <h1 className="text-2xl font-semibold ">We Deliver Projects</h1>
        </div>
        <div>
          <p className="text-gray-600 text-1xl">
            "Welcome to Our Page, where we turn visions into reality. With a proven track record of
            excellence in construction, we specialize in bringing projects of all sizes and complexities to life.
            Whether it's residential, commercial, or industrial, our team is dedicated to delivering superior quality,
            on time and within budget. From concept to completion, we handle every aspect of the construction process
            with precision and expertise. Explore our portfolio to see how we've transformed ideas into stunning
            structures, and let's collaborate to make your next project a success."
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
          src="https://img.freepik.com/free-photo/power-plant-construction_1127-2891.jpg?w=740&t=st=1709035528~exp=1709036128~hmac=007f6b346309fe8c12d001157d372fc2da7796e57477316a47fe7058d491dd25"
          alt=""
        />
      </div>
    </div>
  );
};

export default Project;
