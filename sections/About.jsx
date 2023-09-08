'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id='hshs'>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Introvert Area" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Introvert Area</span> Inspired by a vision of accessible mental wellness, our AI-powered therapy app combines curated therapy content with empathetic AI-supported therapists. At {' '}
        <span className="font-extrabold text-white">
        Introvert Area
        </span>{' '}
        we believe in the transformative power of technology and human connection to foster emotional well-being{' '}
        <span className="font-extrabold text-white">Our Mission</span> is to empower individuals on their mental health journey, offering a safe and supportive space for self-improvement and healing.{' '}
        <span className="font-extrabold text-white">Join Us</span> as we revolutionize the way you experience therapy, making it more convenient, affordable, and personalized for everyone. Explore more by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
