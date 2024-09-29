import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl laeding-[30px]
      "
      >
        <p>
        I'm a skilled software development engineer with experince in Java, Python, C/C++, Javascript, React,
        Node.js, Express, MongoDB. I'm pursuing a Master's degree in Computer Science at Northeastern University, 
        maintaining an impressive 4.0 GPA. With a strong foundation in backend development, web technologies, 
        mobile application development, and machine learning, I bring experience from two software engineering internships 
        in both backend and full-stack roles. I'm proficient in Java, Python, and C/C++, with expertise in Java, Spring Boot, 
        and Android development, having independently built an Android application.
        </p>
        <p>
        I have demonstrated academic excellence, serving as a Teaching Assistant 
        and currently contributing as a Research Apprentice in Human-Computer Interaction at Northeastern. 
        My algorithmic skills are exceptional, ranking in the top 10% globally in LeetCode weekly contests. 
        Additionally, I possess strong communication and teamwork skills, 
        developed through my prior branding experience, where I advanced from a specialist to a CEO Assistant. 
        I'm currently looking for a SDE intern/co-op position.
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
