import React from "react";
import ProjectsItems from "./ProjectsItems";
import img from "../assets/codigo-programacion-desarrollo-web-o-desarrollo-aplicaciones-diseno-web-computadora-fondo-seo-3d_125322-458.avif";
const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        During my projects, I've learned technologies such as HTML, CSS,
        JavaScript, React, Vite, Postman, H2, MySQL, Java, among
        others. These skills have allowed me to develop both in frontend and
        backend. Below, I share some of the projects I've worked on:
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems img={img} title="Frontend 1" p="Html y Css" />
        <ProjectsItems img={img} title="Frontend 2" p="javascript" />
        <ProjectsItems img={img} title="Frontend 3" p="React y Vite" />
        <ProjectsItems img={img} title="Frontend 4" p="React y Tailwind" />
        <ProjectsItems img={img} title="Car4All" p="React y Vite" />
        <ProjectsItems img={img} title="Netflix" p="React y Vite" />
        <ProjectsItems img={img} title="Weather" p="React y Vite" />
        <ProjectsItems img={img} title="Backend 1" p="java H2 Postman" />
        <ProjectsItems img={img} title="Backend 2" p="java H2 Postman" />
      </div>
    </div>
  );
};

export default Projects;
