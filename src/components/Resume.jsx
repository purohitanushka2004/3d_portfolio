import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import AnushkaResume from '../assets/AnushkaPurohit_dehradun_fresher_050924.pdf'; // Make sure this points to the actual file

const CTA = () => {
  return (
    <motion.div className="cta">
      {/* <a href={AnushkaResume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
    </motion.div>
  );
};

export default CTA;
