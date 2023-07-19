import { motion } from "framer-motion";
import SectionWrapper from "@/hoc/sectionwrapper";
import React from "react";
import { textVariant } from "@/utils/motion";
import CustomCircle from "../customComponent/customCircle";
import data from "@/data";

const Technologies = () => {
  const { technology } = data;
  return (
    <>
      <motion.div variants={textVariant()} className="technologies">
        <h2 className="hoverPrimary">{technology.heading}</h2>
        <div className="mt-5 technologies-card">
          {technology.technology.map((e, i) => (
            <CustomCircle key={`${i}technology`} text={e.label} star={e.value} />
          ))}
        </div>
      </motion.div>
      <div id="project"></div>
    </>
  );
};

export default SectionWrapper(Technologies);
