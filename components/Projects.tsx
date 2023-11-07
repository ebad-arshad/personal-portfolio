import React from 'react'
import Layout from './Layout'
import Tabs from './Tabs'

const Projects = () => {
  return (
    <Layout
      parentClassName='relative z-0 bg-black'
      id='projects'
      className='py-14 flex flex-col gap-4 items-center h-full'
    >
      <h1
        className='text-4xl font-bold text-center'
      >Projects</h1>
      <p
        className='text-[#858d95] tracking-wide text-center w-full lg:w-1/2'
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <Tabs />
    </Layout>
  )
}

export default Projects