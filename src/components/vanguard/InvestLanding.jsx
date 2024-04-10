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

const InvestLanding = () => {
  return (
    <>
      <div className="bg-white h-auto flex flex-col ">
        <div className="flex flex-row items-center justify-center h-[50rem] bg-[#C20029]">
          <div className="flex flex-col items-start justify-between w-1/2 p-[3rem] text-white font-serif ">
            <h1 className="text-6xl p-[1rem]">At Vanguard you're more than just an investor, you're an owner</h1>
            <p className="text-2xl p-[1rem]">
              Vanguard isn't owned by public shareholders. It's owned by the people who invest in our funds.*
            </p>
            <p className="text-2xl p-[1rem]">
              Our owners have access to personalized financial advice, high-quality investments, retirement tools, and
              relevant market insights that help you build a future for those you love.
            </p>
            <h1 className="text-5xl py-[3rem] px-[1rem]">The Value of Ownership</h1>
          </div>
          <div className="w-1/2 bg-white h-full">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1611024847487-e26177381a3f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start p-[3.5rem]">
          
          {data.map((con) =>(<div className="py-[1rem]">
            <h1 className="font-bold text-4xl">{con.head}</h1>
            <p className="text-1xl py-[1rem]">
             {con.title}
            </p>
          </div>))}
        </div>
      </div>
    </>
  );
};

export default InvestLanding;
