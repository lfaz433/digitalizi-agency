import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`container ${className || ''}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
