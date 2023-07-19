import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/sectionwrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import CustomCard from "./customComponent/customCard";
import data from "@/data";

const ProjectCard = ({ index, name, description, img, link }) => {
  console.log(link,'-----------')
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <CustomCard name={name} description={description} img={img} link={link} />
        </Tilt>
      </motion.div>
    </>
  );
};

const Work = () => {
  const { project } = data;

  return (
    <>
      <motion.div variants={textVariant()} className="work">
        <div>
          <h2 className="hoverPrimary">{project.heading}</h2>
        </div>
      </motion.div>

      <div className="w-full d-flex work-info mt-5">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="normal-text">
          {project.description}
        </motion.p>
      </div>

      <div className="mt-5 d-flex flex-wrap justify-content-center">
        {project.work.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.heading}
            description={project.description}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
      <div id="contact"></div>
    </>
  );
};
export default SectionWrapper(Work, "");
