'use client';

import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from './Button'
import styles from './module.css/Nav.module.css'
import { motion } from "framer-motion"
import { navItems } from '@/contants'

const Nav = () => {

    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <motion.div
                initial={{ height: 0, y: -34 }}
                animate={{ height: toggleNav ? 'auto' : 0, y: toggleNav ? 0 : -34, transition: { type: 'tween' } }}
                className={`flex md:hidden backdrop-blur-sm overflow-hidden flex-col  z-0 py-4 items-center gap-4 absolute md:z-0 w-full left-0 top-0`}
            >
                <ul className='font-light tracking-wider text-lg flex flex-col items-center gap-1 pt-4 w-full'>
                    {navItems.map((v, i) => (
                        <li key={i} className='text-gray-300 hover:text-white cursor-pointer w-full py-2 text-center'>{v}</li>
                    ))}
                </ul>
                <div className='flex gap-2'>
                    <span
                        className={`${styles.active, styles.before} relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                         bg-[#262626] hover:bg-opacity-0 text-white`}
                    ><FiGithub /></span>
                    <span
                        className={`${styles.active, styles.before} relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                            bg-[#262626] hover:bg-opacity-0 text-white`}
                    ><FaLinkedinIn /></span>
                </div>
                <Button
                    className={`${styles.before} relative transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-white hover:text-black hover:before:w-full`}
                >
                    Let{"'"}s Connect
                </Button>
            </motion.div>
            <Layout className='z-10 fixed left-1/2 -translate-x-1/2 top-0 w-full'>
                <nav
                    className='flex items-center py-6'
                >
                    <Image
                        src={logo}
                        className='w-[100px] cursor-pointer'
                        alt='logo'
                        priority
                    />
                    <div
                        className='flex-1 flex justify-end items-center'
                    >
                        <div className='md:flex hidden flex-1 justify-end items-center gap-4 md:gap-8'>
                            <ul className='font-light tracking-wider  flex flex-col md:flex-row items-center pt-4 md:pt-0 gap-6 lg:gap-12'>
                                {navItems.map((v, i) => (
                                    <li key={i} className='text-gray-300 hover:text-white cursor-pointer w-full md:w-fit py-2 text-center'>{v}</li>
                                ))}
                            </ul>
                            <div className='flex gap-2'>
                                <span
                                    className={`${styles.active, styles.before} relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                            bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FiGithub /></span>
                                <span
                                    className={`${styles.active, styles.before} relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                            bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FaLinkedinIn /></span>
                            </div>
                            <Button
                                className={`${styles.before} relative transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-white hover:text-black hover:before:w-full`}
                            >
                                Let{"'"}s Connect
                            </Button>
                        </div>
                        <RxHamburgerMenu onClick={() => setToggleNav(e => !e)} className='block md:hidden text-3xl cursor-pointer' />
                    </div>
                </nav>
            </Layout >
        </>
    )
}

export default Nav