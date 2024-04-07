import React from 'react'
import ProjectsItems from './ProjectsItems'
import img from '../assets/codigo-programacion-desarrollo-web-o-desarrollo-aplicaciones-diseno-web-computadora-fondo-seo-3d_125322-458.avif'
const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque reprehenderit ipsum, eligendi in quos? Doloribus quidem porro eveniet laborum quis, optio nulla deleniti esse dolorum dignissimos cumque, rem accusamus.</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems img={img} title="Projects"/>
        <ProjectsItems img={img} title="Projects2"/>
        <ProjectsItems img={img} title="Projects3"/>
        <ProjectsItems img={img} title="Projects4"/>
      </div>
    </div>
  )
}

export default Projects
