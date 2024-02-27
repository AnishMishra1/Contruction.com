import React from "react";

const ServiceDetails = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center lg:px-[5rem] p-[1rem] h-auto bg-slate-200">
        <div>
          <img
            className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
            src="https://img.freepik.com/free-photo/medium-shot-man-posing-with-equipment_23-2148921403.jpg?w=826&t=st=1709032980~exp=1709033580~hmac=a46db8901a7cc0a342d72aa2015cf4a5898a9b5651c331b0881445d3e554f065"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-between lg:px-[3rem] px-[2rem] md:py-[2rem] py-[0.5rem]">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Quality and Safety System</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl">
              Implementing a robust quality and safety system in construction is vital for ensuring that projects are
              completed to high standards while prioritizing the well-being of workers and stakeholders.Develop a
              comprehensive quality management plan outlining procedures, responsibilities, and standards for achieving
              quality objectives.Develop and enforce safety policies and procedures that comply with relevant
              regulations and industry standards.Conduct thorough risk assessments to identify potential hazards and
              risks associated with construction activities
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center lg:px-[6rem] p-[1rem] h-auto bg-slate-200 gap-[3rem]">
        <div className="flex flex-col lg:items-end md:items-start justify-between lg:px-[3rem] px-[2rem]  md:py-[2rem] py-[0.5rem] ">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Project Management And Cost Control</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl lg:text-end">
              Project control and cost control are essential aspects of managing construction projects effectively,
              ensuring they stay on schedule, within budget, and meet quality standards.Develop a detailed project plan
              outlining objectives, deliverables, milestones, and timelines.Regularly monitor project progress against
              the established schedule and milestones.Identify potential risks and uncertainties that could impact
              project objectives, such as weather delays, material shortages, or design changes.
            </p>
          </div>
        </div>
        <div>
          <img
            className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
            src="https://img.freepik.com/free-photo/civil-engineer-construction-architecture-worker-are-working-construction-site-with-tablet-blueprints-planing-about-new-construction-sitecooperation-teamwork-concept_640221-306.jpg?w=826&t=st=1709034365~exp=1709034965~hmac=1b122fbb530f1330719ba9d8c11fd9da7e4456ce12bac8cd6e3b273e7c7e5461"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center lg:px-[5rem] p-[1rem] h-auto bg-slate-200">
        <div>
          <img
            className="lg:w-[180rem] w-[120rem] lg:inline-block hidden"
            src="https://img.freepik.com/free-photo/construction-worker-wearing-hardhat-builds-skyscraper-city-sunset-generated-by-artificial-intelligence_188544-93900.jpg?t=st=1709034516~exp=1709038116~hmac=add910f076d3ff1d753ee2598f3691b6244a80710dc4ad2fb059da05505455d3&w=826"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-between lg:px-[3rem] px-[1rem] md:py-[2rem] py-[0.5rem]">
          <div className="py-[1rem]">
            <h1 className="text-2xl font-semibold ">Geology and Soil Mechanics</h1>
          </div>
          <div>
            <p className="text-gray-600 text-1xl">
              Geology and soil mechanics play crucial roles in construction projects, influencing everything from site
              selection to foundation design and construction methods.Geology helps determine the suitability of a site
              for construction. Geological surveys assess factors such as soil composition, rock formations, groundwater
              levels, and seismic activity to identify potential risks and opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-200 h-[5rem]"></div>
    </>
  );
};

export default ServiceDetails;
