import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="flip-left">
          
            <h1 className="text-5xl md:text-6xl font-bold text-black-800">Technologies</h1>
             
             <p className="text-black-800 pt-5 text-2xl md:text-3xl leading-relaxed">
             With a solid foundation in web development, I am proficient in a range of technologies, including TypeScript, HTML, CSS, and JavaScript, enabling me to create dynamic and responsive user interfaces. My expertise extends to Next.js, which I leverage to build performant and scalable applications. I am committed to writing clean, maintainable code and employing best practices in front-end development to deliver exceptional user experiences.
             </p>


        </div>
        <div>
          <div className="grid grid-cols-2 text-accent text-4xl sm:text-5xl font-semibold">
            <div className="space-y-4">
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">JAVASCRIPT</h2>
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">NODE.JS</h2>
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">NEXT.JS</h2>
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">REACT.JS</h2>
            </div>
            <div className="space-y-4">
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">TYPESCRIPT</h2>
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">HTML</h2>
              <h2 data-aos="flip-left" className="transition-transform duration-300 hover:scale-105">CSS</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

