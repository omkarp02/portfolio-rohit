import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";


const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={``}
      >
        <div className="wrapper container">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;