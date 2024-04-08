import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    year: "2022-2024",
    title: "Certified Tech Developer en Digital House",
    duration: "2 Years",
    details:
      "During this two-year program at Digital House, I have acquired a wide range of technical skills and fundamental knowledge that have prepared me to tackle the challenges of the current technological world. I have developed competencies in areas such as web development, programming, agile methodologies, and more. Additionally, I have had the opportunity to work on practical and collaborative projects that have strengthened my ability to solve problems and work in teams",
  },
  // {
  //   year: "2022-2024",
  //   title: "Certified Tech Developer en Digital House",
  //   duration: "2 Years",
  //   details:
  //     "Durante este programa de dos años en Digital House, he adquirido una amplia gama de habilidades técnicas y conocimientos fundamentales que me han preparado para enfrentar los desafíos del mundo tecnológico actual. He desarrollado competencias en áreas como desarrollo web, programación, metodologías ágiles y más. Además, he tenido la oportunidad de trabajar en proyectos prácticos y colaborativos que han fortalecido mi capacidad para resolver problemas y trabajar en equipo.",
  // },
  // {
  //   year: "2022-2024",
  //   title: "Certified Tech Developer en Digital House",
  //   duration: "2 Years",
  //   details:
  //     "Durante este programa de dos años en Digital House, he adquirido una amplia gama de habilidades técnicas y conocimientos fundamentales que me han preparado para enfrentar los desafíos del mundo tecnológico actual. He desarrollado competencias en áreas como desarrollo web, programación, metodologías ágiles y más. Además, he tenido la oportunidad de trabajar en proyectos prácticos y colaborativos que han fortalecido mi capacidad para resolver problemas y trabajar en equipo.",
  // },
  // {
  //   year: "2022-2024",
  //   title: "Certified Tech Developer en Digital House",
  //   duration: "2 Years",
  //   details:
  //     "Durante este programa de dos años en Digital House, he adquirido una amplia gama de habilidades técnicas y conocimientos fundamentales que me han preparado para enfrentar los desafíos del mundo tecnológico actual. He desarrollado competencias en áreas como desarrollo web, programación, metodologías ágiles y más. Además, he tenido la oportunidad de trabajar en proyectos prácticos y colaborativos que han fortalecido mi capacidad para resolver problemas y trabajar en equipo.",
  // },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] p-4">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
