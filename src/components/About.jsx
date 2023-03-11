import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Acerca de mi
          </p>
          <h2 className="py-4">Quien soy</h2>
          <p className="py-2 text-gray-600">
            Soy un ex-estudiante de derecho que, tras cursar cuatro años,
            decidió cambiar de carrera por diversas razones. Desde hace tiempo,
            siempre me ha atraído la programación, pero nunca había tenido la
            oportunidad de involucrarme directamente en ella. Finalmente, dejé
            la carrera y mi objetivo se convirtió en aprender a programar.
            Comencé con JavaScript en r/Argentina Programa y en su grupo de
            Slack, donde aprendí no solo JavaScript y React, sino también otras
            herramientas y consejos que me guiaron en mis primeros pasos en este
            nuevo camino.
          </p>
          <p className="py-2 text-gray-600">
            Actualmente, mi enfoque principal es trabajar en proyectos con
            React, NextJS y Tailwind, lo que me permite profundizar en el
            entendimiento y eventualmente dominio de estas herramientas. Además,
            como siguiente paso, tengo el objetivo de extender mis proyectos al
            back-end para lograr una comprensión más completa del desarrollo de
            aplicaciones web.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Mira mis ultimos proyectos</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-lg flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://es.digitaltrends.com/wp-content/uploads/2020/10/mejores-laptops-hp-feat.jpg?p=1"
            alt="Imagen de computadora"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
