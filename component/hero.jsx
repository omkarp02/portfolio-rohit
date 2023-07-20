import React from "react";
import CustomButton from "./customComponent/customButton";
import SectionWrapper from "@/hoc/sectionwrapper";
import data from "@/data";
import ProfileImgTwo from "@/public/profile3.svg";
import ProfileImg from "@/public/profile.svg";
import DownloadSvg from "@/public/download.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = () => {
  const { hero } = data;

  const router = useRouter();

  return (
    <div className={`hero mt-5`}>
      <div className="row">
        <div className="hero-one col-md-6 col-lg-6">
          <h1 className="hoverPrimary">{hero.titleLineOne}</h1>
          <h1 className="hoverPrimary">{hero.titleLineTwo}</h1>
          <h1 className="hoverPrimary">{hero.titleLineThree}</h1>
          <p className="py-5 fw-bold">{hero.description}</p>
          <div className="d-flex align-items-center">
            <CustomButton
              color="white"
              variant={"info"}
              text={hero.buttonText}
              onClick={() => router.push("#contact")}
            />
            <a
              href="/OmkarResume.pdf"
              className="downloadbtn bg-gradient text-white text-center mx-4"
              download
            >
              <Image
                height={15}
                src={DownloadSvg}
                className="mx-2"
                alt="download"
              />
              Resume
            </a>
          </div>
        </div>

        <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          {/* <div className="hero-img-container position-relative">
            <Image
              src={ProfileImg}
              alt="profile"
              className="position-absolute hero-img-grey w-100 h-100"
            />
          </div> */}
        </div>
        <div id="experience"></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero);
