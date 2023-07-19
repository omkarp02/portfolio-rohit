import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import CodebImg from "@/public/bysness.jpg";
import BysnessImg from "@/public/codeb.jpg";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "@/hoc/sectionwrapper";
import { textVariant } from "@/utils/motion";
import Image from "next/image";
import DotSvg from "@/public/dot.svg";
import {
  gradientColor,
  gradientColorToBottom,
  infoColor,
  lightColor,
  primaryColor,
  secondaryColor,
} from "@/utils/color";
import data from "@/data";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        border: "1px solid black",
        borderRadius: "1rem",
        background: `linear-gradient(white, white) padding-box, ${gradientColor} border-box`,
        border: "4px solid transparent",
        boxShadow: "0 0",
      }}
      contentArrowStyle={{
        borderRight: `1rem solid ${
          index % 2 === 0 ? primaryColor : secondaryColor
        }`,
      }}
      dateClassName="text-primary fw-bold fs-4"
      date={experience.date}
      iconStyle={{ boxShadow: `0 0 0 .5rem ${primaryColor}` }}
      icon={
        <div className="w-100 h-100 ">
          <Image
            src={experience?.companyLogo}
            fill
            className={"mw-100 mh-100  rounded-circle"}
            style={{ objectFit: "cover" }}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-gradient-primary fs-2 fw-bold">
          {experience.position}
        </h3>
        <p className="text-gradient-primary fs-4 fw-bold" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      <ul className="mt-5 px-0 experience-point">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="fw-bold hoverPrimary d-flex"
            style={{ listStyle: "disc" }}
          >
            <div>
              <Image width={20} src={DotSvg} alt="dot.svg" />
            </div>{" "}
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { experience } = data;
  return (
    <>
      <motion.div variants={textVariant()} className="experience">
        <div className="">
          <p className="hoverPrimary">{experience.subHeading}</p>
        </div>
        <div>
          <h2 className="hoverPrimary">{experience.heading}</h2>
        </div>
      </motion.div>
      <div className="mt-5 d-flex flex-column">
        <VerticalTimeline lineColor={gradientColorToBottom}>
          {experience.data.map((experience, index) => (
            <ExperienceCard
              index={index + 1}
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div id="technology"></div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
