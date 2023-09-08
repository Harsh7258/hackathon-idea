'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-around `}
    >
      
      <h4 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        INTROVERT area
      </h4>

      <a href='#hshs'>
      <h6 className="font-medium text-[20px] leading-[30.24px] text-white">
        About us
      </h6>
      </a>

      <a href='#explore'>
      <h6 className="font-medium text-[20px] leading-[30.24px] text-white">
        Sessions
      </h6>
      </a>

      <a href=''>
      <h6 className="font-medium text-[20px] leading-[30.24px] text-white">
        Mood Boost
      </h6>
      </a>

      <a href=''>
      <h6 className="font-medium text-[20px] leading-[30.24px] text-white">
        Login / Signup
      </h6>
      </a>
      
    </div>
  </motion.nav>
);

export default Navbar;
