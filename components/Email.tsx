'use client';

import React, { FormEvent, useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import emailAvatar from '@/assets/images/email-avatar.svg'
import Button from './Button'
import { SendEmail } from '@/utils/sendEmail';
import { ToastContainer, toast } from 'react-toastify';

const Email = () => {

  const [formData, setFormData] = useState({ fName: '', lName: '', email: '', phoneNumber: '', message: '', });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    e.preventDefault();
    const { fName, lName, email, phoneNumber, message } = formData;

    if (fName.length < 2 || lName.length < 2 || phoneNumber.length !== 11 || !validEmail.test(email) || message.length < 20) {
      invalidNotify();
      return;
    }
    try {
      const res = await SendEmail(formData);
      setFormData({ fName: '', lName: '', email: '', phoneNumber: '', message: '', });
      if (res.status === 200) successNotify();
      return;
    } catch (error) {
      errorNotify();
      return;
    }

  }

  const successNotify = () => toast.success('Email sent successfully.', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });

  const invalidNotify = () => toast.error('Invalid data!', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });

  const errorNotify = () => toast.error('Oops! Somethine went wrong. Please try again later.', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  });

  return (
    <>
      <Layout
        parentClassName='bg-gradient-to-r from-[#aa367c] to-[#4a2fbd]'
        className='flex py-14 relative'
        id='email'
      >
        <div className='xl:flex items-center hidden w-full'>
          <Image
            src={emailAvatar}
            className='w-full xl:w-[85%]'
            alt='avatar'
          />
        </div>
        <form onSubmit={handleSubmit} className='flex w-full flex-col gap-5'>
          <p className='text-2xl sm:text-4xl text-center font-bold'>Get In Touch</p>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col lg:flex-row gap-2'>
              <input onChange={(e) => setFormData(v => { return { ...v, fName: e.target.value } })} value={formData.fName} required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='First Name' type="text" />
              <input onChange={(e) => setFormData(v => { return { ...v, lName: e.target.value } })} value={formData.lName} required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Last Name' type="text" />
            </div>
            <div className='flex flex-col lg:flex-row gap-2'>
              <input onChange={(e) => setFormData(v => { return { ...v, email: e.target.value } })} value={formData.email} required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Email' type="text" />
              <input onChange={(e) => setFormData(v => { return { ...v, phoneNumber: e.target.value } })} value={formData.phoneNumber} required className='lg:flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' placeholder='Phone No.' type="number" />
            </div>
            <div className='flex'>
              <textarea placeholder='Message' onChange={(e) => setFormData(v => { return { ...v, message: e.target.value } })} value={formData.message} required className='flex-1 transitions bg-white/20 border outline-none focus:bg-white focus:placeholder:text-gray-500 focus:text-black border-gray-400 rounded-2xl px-6 py-4 placeholder:text-gray-100' cols={30} rows={10}></textarea>
            </div>
          </div>
          <Button
            type='submit'
            className={`before relative z-0 w-full  bg-white border-none text-black xl:px-14 transitions before:-z-10 before:absolute before:left-0 before:top-0 before:content-[""] before:w-0 before:h-full before:bg-black hover:text-white hover:before:w-full`}
          >
            Send
          </Button>
        </form>
      </Layout>
      <ToastContainer />
    </>
  )
}

export default Email