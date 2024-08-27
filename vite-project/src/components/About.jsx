import React from "react";
import imgPersonal from "../assets/IMG_1854.jpg";

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      <p className="text-center text-gray-800 mt-4">
        Since 2019, I've owned an interior design firm, channeling my passion
        for crafting beautiful spaces. Now, I'm delving into software
        engineering to enhance my skills and versatility in the market. I'm
        particularly drawn to software development, both Frontend and Backend,
        where I can blend creativity with technical precision to innovate and
        create functional solutions.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <img
          src={imgPersonal}
          alt="Personal"
          className="w-60  md:w-80 rounded-lg border-4 border-[#001b5e] mb-4 md:mb-0"
        />
        <div className="md:ml-8">
          <h3 className="text-2xl font-semibold text-[#001b5e]">
            Web Developer
          </h3>
          <div className="mt-4">
            <p className="text-lg text-gray-800">Nicolas Lopez</p>
            <p className="text-lg text-gray-800">Age : 30</p>
            <p className="text-lg text-gray-800">Email : nicolopezarq@gmail.com</p>
            <p className="text-lg text-gray-800">Phone : +54 9 3513502766</p>
            <p className="text-lg text-gray-800">City : Córdoba, Argentina</p>
            <p className="text-lg text-gray-800">GitHub : <a
              href="https://github.com/Nicolopez93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-800 hover:underline"
            >
               https://github.com/Nicolopez93
            </a>
            </p>
            <p className="text-lg text-gray-800">Linkedin : <a
              href="https://www.linkedin.com/in/nicolas-lopez-98a199185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-800 hover:underline"
            >
            https://www.linkedin.com/in/nicolas-lopez-98a199185/
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
