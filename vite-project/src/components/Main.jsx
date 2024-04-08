import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://hostingplus.ar/wp-content/uploads/2021/12/funciones_de_un_programador_web.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-gray-900/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            I'm Nicolas Lopez
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white items-center ">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                padding: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.facebook.com/nico.lopez.7982"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer text-white" size={20} />
            </a>
            <a
              href="https://www.instagram.com/nico_lopez93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer text-white" size={20} />
            </a>
            <a
              href="https://github.com/Nicolopez93"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer text-white" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-lopez-98a199185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
