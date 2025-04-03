import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-6 bg-black-100 rounded-[10px] max-w-md mx-auto p-4 overflow-hidden`}>
      <div className={`bg-tertiary rounded-xl ${styles.padding} min-h-[150px] flex flex-col justify-center items-center text-center`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-sm mb-12`}>More on</p>
          <h2 className={`${styles.sectionHeadText} text-lg mt-1 w-full`}>Github</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
