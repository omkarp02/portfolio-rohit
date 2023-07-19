import React from "react";
import StarImg from "@/public/star.svg";
import Image from "next/image";

const CustomCircle = ({ text = "", star  }) => {
  const data = Array.from({ length: star }, (_, i) => i + 1);
  return (
    <div className="custom-circle-container">
      <div className="firstside text-primary">{text}</div>
      <div className="secondside d-flex align-items-center justify-content-center">
        {data.map((e) => (
          <Image src={StarImg} />
        ))} 
      </div>
    </div>
  );
};

export default CustomCircle;
