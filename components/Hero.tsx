'use client';

import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import avatar from '@/assets/images/avatar.svg'
import Typewriter from 'typewriter-effect';
import { BsArrowRightCircle } from 'react-icons/bs'
import { motion } from 'framer-motion'
import styles from './module.css/Hero.module.css'

const Hero = () => {
  return (
    <div className={`${styles.heroImage} pb-10 sm:pb-0`}>
      <Layout
        parentClassName='pt-36 md:pt-0 relative z-0'
        className='min-h-[calc(100vh-50px)] flex items-center justify-center flex-col md:flex-row'>
        <div className='flex-1 w-full flex flex-col gap-4 '>
          <div
            className='bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] font-bold text-lg sm:text-xl p-2 w-fit border '
          >Welcome to my Portfolio</div>
          <div className='text-4xl md:text-6xl font-bold'>Hi! I{"'"}m Ebad and I am <Typewriter
            options={{
              strings: ['a JavaScript Developer.', 'a Problem Solver.', 'a Logic Builder.', 'a ReactJS Developer.', 'a NextJS Developer.', 'a MERN Stack Developer.',],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <div className='text-gray-300 tracking-wide text-sm md:text-base'>A passionate Front End Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.</div>
          <a href='#email'>
            <button className='p-3 font-bold text-lg tracking-wide flex gap-2 items-center box cursor-pointer'>
              <div>Let{"'"}s Connect</div>
              <div className='text-2xl'><BsArrowRightCircle /></div>
            </button>
          </a>
        </div>
        <motion.div
          animate={{ y: [40, 0, 40, 0, 40,] }}
          transition={{ ease: "linear", duration: 3, repeat: Infinity }}
          className='flex-1 flex justify-center md:justify-end items-start '
        >
          <Image
            src={avatar}
            alt='avatar'
            className='sm:w-[70%] md:w-full lg:w-3/4'
          />
        </motion.div>
      </Layout>
    </div>
  )
}

export default Hero