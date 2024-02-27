// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

const features = [
  {
    heading: "WE PROVIDE MAINTANCE SERVICE",
    description:
      "Maintenance and renovation are crucial aspects of construction projects, ensuring that buildings and infrastructure remain functional, safe, and aesthetically pleasing over time",
  },
  {
    heading: "WE PROVIDE QUALITY SERVICE",
    description:
      "Implementing a robust quality and safety system in construction is vital for ensuring that projects are completed to high standards while prioritizing the well-being of workers and stakeholders",
  },
  {
    heading: "WE DELIVER PROJECT ",
    description:
      "Project control and cost control are essential aspects of managing construction projects effectively, ensuring they stay on schedule, within budget, and meet quality standards.",
  },
];

const Hero = () => {
  var settings: Settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: false,
    dots: true,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "-4px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: "white",
          height: "1rem",
          width: "1rem",
          color: "",
        }}
      >
        {}
      </div>
    ),
  };

  return (
    <div
      className=" sm:px-[3rem] py-[5rem] min-h-[35rem] bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.5)),url(https://img.freepik.com/free-psd/builder-carries-steel-beam-his-shoulder-generative-ai_587448-2200.jpg?w=996&t=st=1709035751~exp=1709036351~hmac=99506d0e55b46caa34a716e74cbb3027b7ca01f67567bd569a18d5d96c5da157)",
      }}
    >
      <Slider {...settings}>
        {features.map((data, index) => (
          <div className="sm:px-[1rem]">
            <div className="bg-transparent rounded-3xl sm:p-[2rem] flex gap-[2rem] text-white">
              <div className="flex flex-col gap-[1rem]">
                <div className="max-w-[23rem] md:max-w-[30rem] flex flex-col gap-[1rem]">
                  <h1 className="text-[2rem] leading-[2rem] font-bold text-center sm:text-left">{data.heading}</h1>
                  <p className="text-justify text-sm">{data.description}</p>
                  <Button
                    variant="shadow"
                    color="primary"
                    radius="none"
                    endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
                    className="max-w-[10rem] self-center sm:self-start"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
