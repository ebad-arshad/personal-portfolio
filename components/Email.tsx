import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import emailAvatar from '@/assets/images/email-avatar.svg'
import Button from './Button'

const Email = () => {
  return (
    <Layout
      parentClassName='bg-gradient-to-r from-[#aa367c] to-[#4a2fbd]'
      id='email'
    >

      <div className='flex py-14'>
        <div className='items-center hidden xl:flex flex-1'>
          <Image
            src={emailAvatar}
            className='w-full xl:w-[85%]'
            alt='avatar'
          />
        </div>
        {/* ================================================= */}
        <form className=' flex-1 flex flex-col gap-5'>
          <p className='text-4xl font-bold'>Get In Touch</p>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col lg:flex-row gap-2'>
              <input required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='First Name' type="text" />
              <input required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Last Name' type="text" />
            </div>
            <div className='flex flex-col lg:flex-row gap-2'>
              <input required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Email' type="text" />
              <input required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Phone No.' type="number" />
            </div>
            <div className='flex'>
              <textarea placeholder='Message' required className='flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' cols={30} rows={10}></textarea>
            </div>
          </div>
          <Button
            type='submit'
            className={`before relative z-0 w-full xl:w-fit bg-white border-none text-black px-14 transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-black hover:text-white hover:before:w-full`}
          >
            Send
          </Button>
        </form>
      </div>

      <div className='rounded-3xl md:gap-4 overflow-hidden bg-white min-h-[250px] text-black flex flex-wrap items-center justify-center translate-y-32 p-5 lg:px-40'>
        <span className='md:flex-[.35] font-bold text-lg md:text-2xl text-center md:text-left w-[80%] md:w-full'>Subscribe to our Newsletter & Never miss latest updates</span>
        <span className='md:flex-[.65] bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] flex rounded-2xl overflow-hidden'>
          <form className='flex bg-white m-[1px] w-full h-full rounded-2xl overflow-hidden'>
            <input required className='bg-transparent w-[70%] placeholder:text-gray-500 border-none outline-none p-5' type="text" placeholder='Email Address' />
            <Button type='submit' className='border-none w-[30%] flex justify-center bg-gradient-to-r from-[#aa367c] to-[#4a2fbd] text-white m-1 rounded-2xl px-4 md:px-14'>Submit</Button>
          </form>
        </span>
      </div>
    </Layout>
  )
}

export default Email