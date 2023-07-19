import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/sectionwrapper";
import CustomButton from "./customComponent/customButton";
import ContactMe from "@/public/contactImg.svg";
import Image from "next/image";
import Loader from "./customComponent/loader";
import PreLoader from "./customComponent/preLoader";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [buttonText, setButtonText] = useState("Submit");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res) {
        if (res.status === 200) {
          setData({ name: "", email: "", message: "" });
          setButtonText("Email Send Successfully");
          setTimeout(() => {
            setButtonText("Submit");
          }, 4000);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const changeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  return (
    <>
      <div className={`contact container`}>
        <form onSubmit={submitHandler} autoComplete="off">
          <div className="row">
            <div
              // variants={slideIn("left", "tween", 0.2, 1)}
              className="col-lg-6 col-md-6 contact-container d-flex flex-column align-items-center m-auto"
            >
              <h2 className="hoverPrimary mb-4 text-center">Contact Me</h2>
              <input
                required
                type="text"
                onChange={changeHandler}
                name="name"
                value={data.name}
                placeholder="Enter Your Name"
                className="contact-custom-input"
              />
              <input
                required
                type="email"
                onChange={changeHandler}
                name="email"
                value={data.email}
                placeholder="Enter Your Email"
                className="contact-custom-input"
              />
              <textarea
                required
                className="contact-custom-input textarea-custom py-1"
                onChange={changeHandler}
                name="message"
                value={data.message}
                placeholder="Enter the message"
              ></textarea>
              {!loading ? (
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient text-white contact-button border-0 py-3 px-5"
                >
                  {buttonText}
                </button>
              ) : (
                <Loader />
              )}
            </div>

            <div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="col-lg-6 col-md-6 my-5"
            >
              <Image
                src={ContactMe}
                height={400}
                alt="contact.svg"
                className="mt-3"
                style={{ width: "80%", height: "80%" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact);
