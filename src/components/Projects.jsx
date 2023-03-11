import Image from "next/image";
import React from "react";
import pokedexImg from "../../public/assents/images/projects/pokedex-react.png";
import crudClubesImg from "../../public/assents/images/projects/crud-clubes.png";
import rentACarImg from "../../public/assents/images/projects/rent-a-car.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-19">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Mis proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pokedex React"
            backgroundImg={pokedexImg}
            buildIn="React"
            projectUrl="/pokedex"
          />
          <ProjectItem
            title="Crud Clubes"
            backgroundImg={crudClubesImg}
            buildIn="Node.js y Express.js"
            projectUrl="/crudclubes"
          />
          <ProjectItem
            title="Rent a Car"
            backgroundImg={rentACarImg}
            buildIn="Node.js y Express.js"
            projectUrl="/rentcar"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
