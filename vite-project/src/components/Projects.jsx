import React from 'react'
import ProjectsItems from './ProjectsItems'
import img from '../assets/codigo-programacion-desarrollo-web-o-desarrollo-aplicaciones-diseno-web-computadora-fondo-seo-3d_125322-458.avif'
const Projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque reprehenderit ipsum, eligendi in quos? Doloribus quidem porro eveniet laborum quis, optio nulla deleniti esse dolorum dignissimos cumque, rem accusamus.</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItems img={img} title="Frontend 1" p = "Html y Css"/>
        <ProjectsItems img={img} title="Frontend 2" p = "javascript"/>
        <ProjectsItems img={img} title="Frontend 3" p = "React y Vite"/>
        <ProjectsItems img={img} title="Car4All" p = "React y Vite"/>
        <ProjectsItems img={img} title="Backend 1" p = "java H2 Postman"/>
        <ProjectsItems img={img} title="Backend 2" p = "java H2 Postman"/>
      </div>
    </div>
  )
}

export default Projects
