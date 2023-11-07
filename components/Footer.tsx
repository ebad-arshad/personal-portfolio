import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import Layout from './Layout'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './module.css/Footer.module.css'

const Footer = () => {
  return (
    <Layout
      parentClassName={styles.bgImage}
      className='pt-52 py-20 flex flex-col md:flex-row items-center md:items-end justify-between'>
      <div className='hidden md:block'>
        <Image src={logo} alt='logo' />
      </div>
      <div className='flex flex-col gap-5 items-center md:items-end'>
        <div className='flex gap-2'>
          <span
            className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                                transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                             bg-[#262626] hover:bg-opacity-0 text-white`}
          ><Link target='_blank' href='https://github.com/ebad-arshad'><FiGithub /></Link></span>
          <span
            className={`before relative cursor-pointer border p-3 text-xl flex rounded-full
                                transitions before:-z-10 before:absolute before:content-[""] before:w-full before:scale-0 before:h-full before:bg-white hover:text-black hover:before:w-full before:top-0 before:left-0 overflow-hidden hover:before:scale-100 before:rounded-full
                                bg-[#262626] hover:bg-opacity-0 text-white`}
          ><Link target='_blank' href='https://www.linkedin.com/in/ebad-arshad/'><FaLinkedinIn /></Link></span>
        </div>
        <p className='text-center text-sm text-gray-400 tracking-wide'>Copyright 2022. All Rights Reserved</p>
      </div>
    </Layout>
  )
}

export default Footer