import { motion } from "framer-motion";
import SectionWrapper from '@/hoc/sectionwrapper'
import Asdf from '@/public/back.jpg'
import React, { useState } from 'react'
import { textVariant } from "@/utils/motion";
import Image from "next/image";
import QuoteSvg from '@/public/quote.svg'
import data from "@/data";


const Testimonial = () => {


    const [pick, setPick] = useState(0)

    const { testimonial } = data

    return (
        <div>
            
            <motion.div variants={textVariant()} className='testimonial' >
                <div className="mb-5">
                    <h2 className="hoverPrimary">
                        {testimonial.heading}
                    </h2>
                </div>
                <div className="testimonial-body">

                    <div className="personImageContainer d-flex justify-content-center gap-4">
                        {testimonial.img.map((e, i) => {
                            return <Image key={`${i}testimonialimg`} className={`person-img ${i === pick ? 'border-gradient-primary' : ''}`} onClick={() => setPick(i)} src={Asdf} alt='imag.svgsd' />
                        })}
                    </div>
                    <div className="review normal-text text-center">
                        {testimonial.review[pick]}
                    </div>
                    <div className="quote-container">s
                        <Image className="w-100 h-100" src={QuoteSvg} />
                    </div>
                    <p className="reviewer-name text-gradient-primary text-center"> {testimonial.reviewerName[pick]}</p>
                    <p className="reviewer-work text-gradient-primary text-center"> {testimonial.reviewerDesignation[pick]}</p>
                </div>
                <div id='contact'></div>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Testimonial)