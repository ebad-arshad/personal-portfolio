'use client';

import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import bg from '@/assets/images/bg.png'
import avatar from '@/assets/images/avatar.svg'
import Typewriter from 'typewriter-effect';
import { BsArrowRightCircle } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {

  return (
    <>
      <Image src={bg} className='w-screen h-[calc(100vh-50px)] scale-150 sm:scale-[1.3] md:scale-100 object-cover object-top absolute top-28 -z-10' alt='bg' />
      <Layout className='h-[calc(100vh-50px)] md:pt-28 flex items-center justify-center w-full flex-col md:flex-row pt-80'>
        <div className='flex-1 w-full flex flex-col gap-4'>
          <div
            className='bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] font-bold text-xl p-2 w-fit border'
          >Welcome to my Portfolio</div>
          <div className='text-4xl md:text-6xl font-bold'>Hi! I{"'"}m Ebad and I am <Typewriter
            options={{
              strings: ['a JavaScript Developer.', 'a Problem Solver.', 'a Logic Builder.', 'a ReactJS Developer.', 'a NextJS Developer.', 'a MERN Stack Developer.',],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <div className='text-gray-300 tracking-wide text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          <div className='font-bold text-lg tracking-wide flex gap-2 items-center box cursor-pointer'>
            <div>Let{"'"}s Connect</div>
            <div className='text-2xl'><BsArrowRightCircle /></div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ ease: "linear", duration: 3, repeat: Infinity }}
          className='flex-1 flex justify-center md:justify-end items-start'
        >
          <Image
            src={avatar}
            alt='avatar'
            className='sm:w-[70%] md:w-full lg:w-3/4'
          />
        </motion.div>
      </Layout>
    </>
  )
}

export default Hero