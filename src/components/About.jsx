import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-full leading-[30px] px-4 sm:px-8'
>
  I am an aspiring software developer currently pursuing a B.Tech in Computer Science at Graphic Era Hill University, where I have developed a strong foundation in programming languages such as Java, C++, and JavaScript. My passion for web development, especially in front-end technologies, is evident through my hands-on experience with HTML, CSS, ReactJS, and Redux.

  I have also delved into backend technologies with Node.js, and I am proficient in integrating complex functionalities to build scalable and user-friendly applications. My experience extends to working with TypeScript and frameworks like Three.js, which enhances my ability to deliver seamless and dynamic user interfaces.

  Driven by a desire to continually learn and grow, I thrive on tackling challenging projects and internships that push my technical skills further. I am adept at collaborating closely with clients to create efficient solutions that address real-world problems. Let's connect and explore how we can bring your ideas to life with innovative and impactful software solutions!
</motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");