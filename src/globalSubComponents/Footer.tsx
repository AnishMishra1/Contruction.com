// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
//

const contactInfo = [
  {
    name: "Phone",
    value: "+1 (845) 687-3270",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@hmsfreedom.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "Unit-544, McCabe Street, Port Charlotte, Florida, USA",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home", link: "Home", state: {} },
      { key: "services", value: "Services", link: "Services", state: {} },
      { key: "about", value: "About", link: "About", state: {} },
      { key: "contact", value: "Contact", link: "Contact", state: {} },
      { key: "pricing", value: "Pricing", link: "Pricing", state: {} },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "webdev", value: "Website Development", link: "Services/Individual", state: { id: 0 } },
      { key: "seo", value: "Search Engine Optimization", link: "Services/Individual", state: { id: 1 } },
      { key: "socialmarketing", value: "Social Media Marketing", link: "Services/Individual", state: { id: 2 } },
      { key: "webanalytics", value: "Web Analytics", link: "Services/Individual", state: { id: 3 } },
      { key: "graphicdesign", value: "Graphics Design", link: "Services/Individual", state: { id: 4 } },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-600 lg:h-[20rem] h-auto py-10 px-[3rem] ">
      {/* White text */}

 
  {/* Text */}
  <p className="text-white">
    {/* © 1995-2024 The Vanguard Group, Inc. All rights reserved. Vanguard Marketing Corporation, Distributor of the Vanguard Funds. Your use of this site signifies that you accept our terms & conditions of use. */}
    <span>
      © 1995-2024 The Vanguard Group, Inc. All rights reserved. Vanguard Marketing Corporation, Distributor of the Vanguard Funds.
    </span>
    <br />
    Your use of this site signifies that you accept our
    <a href="#" className="ml-2 underline">terms & conditions of use</a>.
  </p>
      <ul className="flex lg:flex-row list-none p-0 m-0 cursor-pointer mt-11 text-small space-x-2 flex-col">
        <li className="p-2 my-6 underline text-white">Privacy Center</li>
        <li className="p-2 my-6 underline text-white">Do Not Sell My Personal Information</li>
        <li className="p-2 my-6 underline text-white">Security Center</li>
        <li className="p-2 my-6 underline text-white">Accessibility</li>
        <li className="p-2 my-6 underline text-white">Mutual fund prospectuses</li>
        <li className="p-2 my-6 underline text-white">Exchange-traded fund (ETF) prospectuses</li>
        <li className="p-2 my-6 underline text-white">Special notice to non-U.S. investors</li>
        <li className="p-2 my-6 underline text-white">Manage cookies</li>
      </ul>
      {/* <div className="flex md:flex-row flex-col items-start justify-evenly ">
        address
        <div className="flex flex-col items-start justify-center">
          <div className="p-[2rem]">
            <h1 className="text-[1.5rem]  text-white">Address</h1>
          </div>
          <div className="text-white text-[1.1rem] px-[2rem]">
            <ul>
              <li className="flex flex-row items-center gap-2">
                <span className="text-white">
                  <IoLocation />
                </span>
                Port Charlotte, Florida, USA
              </li>
              <li className="flex flex-row items-center gap-2 ">
                <span className="text-white">
                  <FaPhone />
                </span>
                Call +91-9562 582525
              </li>
              <li className="flex flex-row items-center gap-2">
                <span className="text-white">
                  <MdEmail />
                </span>
                construction@gmail.com
              </li>
              <li className="flex flex-row items-center gap-2 py-[1rem] text-1xl">
                <span className="text-2xl">
                  <FaFacebook />
                </span>
                <span className="text-2xl">
                  <FaTwitter />
                </span>
                <span className="text-2xl">
                  <FaYoutube />
                </span>
                <span className="text-2xl">
                  <FaInstagram />
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* info */}
      {/* <div className="flex flex-col items-start justify-center">
          <div className="p-[2rem]">
            <h1 className="text-[1.5rem]  text-white">Info</h1>
          </div>
          <div className="text-white text-[1.1rem] px-[2rem]">
            <ul>
              <li className="text-start">
                Project and cost control are essential for
                <br /> managing construction projects effectively
                <br />
                within budget, and meet quality standards.
              </li>
            </ul>
          </div>
        </div>
        {/* links */}
      {/* <div className="flex flex-col items-start justify-center">
          <div className="p-[2rem]">
            <h1 className="text-[1.5rem]  text-white">Links</h1>
          </div>
          <div className="text-white text-[1.1rem] px-[2rem]">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </div> */}
      {/* suscrive */}
      {/* <div className="flex flex-col items-start justify-center">
          <div className="p-[2rem]">
            <h1 className="text-[1.5rem]  text-white">Subscribe</h1>
          </div>
          <div className="text-white text-[1.1rem] px-[2rem] f">
            <input type="text" placeholder="Enter Email" className="py-[0.6rem] px-[2rem] text-start border-2 " />
            <div className="py-[2rem] text-white ">
              <button className="py-[0.6rem] bg-[#0a97b0] text-white px-[6rem]">Subscribe</button>
            </div>
          </div>
        </div>  */}
      {/* </div> */}
    </div>
  );
};

export default Footer;
