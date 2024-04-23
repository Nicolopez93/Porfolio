import React from 'react';
import { useState } from 'react';

const ProjectsItems = ({ img, title, p }) => {

  const projectLinks = {
    "Frontend 1": "https://nicolopez93.github.io/Final-Front-end-1/",
    "Frontend 2": "https://github.com/Nicolopez93/Frontend-2",
    "Frontend 3": "https://vercel.com/nicolas-projects-6ebc759d/final-front-end-3/Hootp84Ywxu3aFTcSCmoHLwJBzeR",
    "Frontend 4": "https://website-pi-three-21.vercel.app/",
    "Car4All": "http://car4all.s3-website-us-east-1.amazonaws.com/",
    "Netflix": "https://github.com/Nicolopez93/Netflix.git",
    "Backend 1": "https://github.com/Nicolopez93/backend-1",
    "Backend 2": "https://github.com/Nicolopez93/backend-car4all.git"
  };

  // Estado para almacenar el enlace del proyecto actual
  const [projectLink, setProjectLink] = useState('');

  const setProjectInfo = () => {
    setProjectLink(projectLinks[title]);
    // Abrir el enlace en una nueva pestaña
    window.open(projectLinks[title], '_blank');
  }

  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-white text-center">{p}</p>
        <button onClick={setProjectInfo} className='text-gray-700 text-center p-3 rounded-ld bg-white font-bold cursor-pointer text-lg rounded-xl'>More info</button>
      </div>
    </div>
  );
};

export default ProjectsItems;
