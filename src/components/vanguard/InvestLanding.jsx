import React from "react";

const data = [
  {
    head: "Aligned interests",
    title:
      "Because our investors are our owners, our interests are uniquely aligned, allowing us to focus on you and your goals.",
  },

  {
    head: "Greater conviction",
    title:
      "Because our investors are our owners, we act with conviction on the investment themes that are important to you.",
  },
  {
    head: "Long-term perspective",
    title: "Because our investors are our owners, we can focus on the long term rather than quarterly results.",
  },
  {
    head: "Low costs",
    title:
      "Because our investors are our owners, it enables us to consistently pass along economies of scale and lower the cost of investing, so you keep more of your returns.",
  },
];

const Company = [
  {
    name: "Company information and insights",
    title: "Introduces Vanguard and features our expert research and commentary.",
  },
  {
    name: "Pressroom",
    title: "The latest Vanguard news, announcements, and more.",
  },
  {
    name: "Career opportunities",
    title: "Interested in joining us? Learn more about our openings.",
  },
  {
    name: "Contact Us",
    title: "Find the right way to get in touch with us quickly.",
  },
];

const host = [
  {
    name: "Personal investors",
    title: "Invest on your own, get professional advice, open a retirement account, save for education.",
  },
  {
    name: "Retirement plan participants",
    title: "For investors using an employer's retirement plan.",
  },
  {
    name: "Institutional investors",
    title: "For sponsors, consultants, and representatives.",
  },
  {
    name: "Financial professionals",
    title: "For broker-dealers, advisors, and brokerage professionals.",
  },
];

const InvestLanding = () => {
  return (
    <>
      <div className="bg-white h-auto flex flex-col ">
        <div className="flex flex-row items-center justify-center lg:h-[50rem] h-auto bg-[#C20029]">
          <div className="flex flex-col items-start justify-between w-1/2 lg:p-[3rem] p-[1rem] text-white font-serif ">
            <h1 className="lg:text-6xl text-3xl lg:p-[1rem] py-[1rem]">
              At Vanguard you're more than just an investor, you're an owner
            </h1>
            <p className="lg:text-2xl text-1xl lg:p-[1rem]">
              Vanguard isn't owned by public shareholders. It's owned by the people who invest in our funds.*
            </p>
            <p className="lg:text-2xl text-1xl lg:p-[1rem]">
              Our owners have access to personalized financial advice, high-quality investments, retirement tools, and
              relevant market insights that help you build a future for those you love.
            </p>
            <h1 className="lg:text-5xl text-2xl py-[3rem] lg:px-[1rem]">The Value of Ownership</h1>
          </div>
          <div className="w-1/2 bg-white h-full lg:inline-block hidden">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1611024847487-e26177381a3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-[3.5rem]">
          {data.map((con) => (
            <div className="py-[1rem]">
              <h1 className="font-bold text-4xl">{con.head}</h1>
              <p className="text-1xl py-[1rem]">{con.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center p-[3rem]">
          <h1 className="text-5xl font-bold text-[#C20029]">Become an owner</h1>
          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="p-[4rem]">
              <h1 className="text-2xl font-bold py-[1rem]">OUR COMPANY</h1>
              {Company.map((data) => (
                <div>
                  <div className="py-[0.5rem]">
                    <h1 className="text-2xl font-bold py-[0.5rem]">{data.name}</h1>
                    <p>{data.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-[4rem]">
              <h1 className="text-2xl font-bold py-[1rem]">OUR SITES</h1>
              {Company.map((data) => (
                <div>
                  <div className="py-[0.5rem]">
                    <h1 className="text-2xl font-bold py-[0.5rem]">{data.name}</h1>
                    <p>{data.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start px-[3.5rem] py-[1rem]">
          <h1 className="text-4xl font-bold py-[1rem]">Important Information</h1>
          <p className="text-1xl py-[0.5rem]">
            All investing is subject to risk including the possible loss of the money you invest.
          </p>
          <p className="text-1xl py-[0.5rem]">
            *Vanguard is owned by its funds, which are owned by Vanguard's fund shareholder clients.
          </p>
          <p className="text-1xl py-[0.5rem]">
            Advice services are provided by Vanguard Advisers, Inc., a registered investment advisor, or by Vanguard
            National Trust Company, a federally chartered, limited-purpose trust company.
          </p>
        </div>
      </div>
    </>
  );
};

export default InvestLanding;
