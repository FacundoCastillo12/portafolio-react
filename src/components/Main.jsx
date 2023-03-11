import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tx-sim tracking-widest text-gray-600">
            Bienvenido
          </p>
          <h1 className="py-4 text-gray-700">
            Hola soy <span className="text-[#5651e5]">Facundo</span>{" "}
          </h1>
          <h1 className="py-4 text-gray-700">Desarrollador Web Front-End</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Soy un desarrollador web front-end autodidacta en constante
            evolución que busca de convertirse en un experto full-stack.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/facundocastillo12/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/FacundoCastillo12">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:castillobraianfacundo@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
