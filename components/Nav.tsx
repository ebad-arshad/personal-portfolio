'use client';

import React, { useState } from 'react'
import Layout from './Layout'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from './Button'
import { AnimatePresence, motion } from "framer-motion"
import { navItems } from '@/contants'
import Link from 'next/link';
import Logo from './Logo';

const Nav = () => {

    const [colorChange, setColorChange] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 40) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeNavbarColor);
    };

    return (
        <>
            <AnimatePresence>
                {
                    toggleNav &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: toggleNav ? 'auto' : 0, opacity: toggleNav ? 1 : 0, transition: { type: 'tween' } }}
                        exit={{ height: 0, opacity: 0 }}
                        className={`flex md:hidden backdrop-blur-sm overflow-hidden flex-col z-10 py-4 items-center gap-4 fixed md:z-0 w-full left-0 ${colorChange ? 'top-[53px]' : 'top-[78px]'}`}
                    >
                        <ul className='font-light tracking-wider text-lg flex flex-col items-center gap-1 w-full'>
                            {navItems.map((v, i) => (
                                <a onClick={() => setToggleNav(false)} key={i} href={v.url}> <li className='text-gray-300 hover:text-white font-normal cursor-pointer w-full py-2 text-center'>{v.name}</li></a>
                            ))}
                        </ul>
                        <div className='flex gap-2'>
                            <Link onClick={() => setToggleNav(false)} target='_blank' href='https://github.com/ebad-arshad'>
                                <span
                                    className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                                transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                             bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FiGithub /></span></Link>
                            <Link onClick={() => setToggleNav(false)} target='_blank' href='https://www.linkedin.com/in/ebad-arshad/'>
                                <span
                                    className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                                transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                                bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FaLinkedinIn /></span></Link>
                        </div>
                        <Button
                            className={`before relative z-0 transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-white hover:text-black hover:before:w-full`}
                            href='#email'
                            handleClick={() => setToggleNav(false)}
                        >
                            Let{"'"}s Connect
                        </Button>
                    </motion.div>
                }
            </AnimatePresence>
            <Layout
                parentClassName={`z-10 fixed left-1/2 -translate-x-1/2 top-0 w-full backdrop-blur-sm ${colorChange && 'bg-black/70'} transitions`}
                className={`flex items-center ${colorChange ? 'py-3' : 'py-6'} transitions`}
            >
                <Logo />
                <div
                    className='flex-1 flex justify-end items-center'
                >
                    <div className='md:flex hidden flex-1 justify-end items-center gap-4 md:gap-8'>
                        <ul className='font-light tracking-wider flex flex-col md:flex-row items-center pt-4 md:pt-0 gap-6 lg:gap-12'>
                            {navItems.map((v, i) => (
                                <a key={i} href={v.url}><li className='text-gray-300 font-normal hover:text-white cursor-pointer w-full md:w-fit py-2 text-center'>{v.name}</li></a>
                            ))}
                        </ul>
                        <div className='flex gap-2'>
                            <Link target='_blank' href='https://github.com/ebad-arshad'>
                                <span
                                    className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                            bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FiGithub /></span></Link>
                            <Link target='_blank' href='https://www.linkedin.com/in/ebad-arshad/'>
                                <span
                                    className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                            transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                            bg-[#262626] hover:bg-opacity-0 text-white`}
                                ><FaLinkedinIn /></span></Link>
                        </div>
                        <Button
                            className={`before relative z-0 transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-white hover:text-black hover:before:w-full`}
                            href='#email'
                        >
                            Let{"'"}s Connect
                        </Button>
                    </div>
                    <RxHamburgerMenu onClick={() => setToggleNav(e => !e)} className='block md:hidden text-3xl cursor-pointer' />
                </div>
            </Layout >
        </>
    )
}

export default Nav