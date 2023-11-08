'use client';

import Layout from './Layout'
import Image from 'next/image'
import blob from '@/assets/images/shade1.png'
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaNode, FaFigma, FaPython, } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiRedux, SiMongodb, SiTailwindcss, SiPostman, SiAdobexd, SiTypescript, } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import SkillList from './SkillList';

const skills = [
  { icon: <FaHtml5 />, label: 'Html5', progress: 100 },
  { icon: <FaCss3Alt />, label: 'Css3', progress: 80 },
  { icon: <SiTailwindcss />, label: 'TailwindCSS', progress: 90 },
  { icon: <SiJavascript />, label: 'JavaScript', progress: 60 },
  { icon: <SiTypescript />, label: 'TypeScript', progress: 70 },
  { icon: <FaReact />, label: 'ReactJS', progress: 70 },
  { icon: <SiRedux />, label: 'Redux', progress: 50 },
  { icon: <TbBrandNextjs />, label: 'NextJS', progress: 60 },
  { icon: <SiFirebase />, label: 'Firebase', progress: 80 },
  { icon: <FaNode />, label: 'NodeJS', progress: 40 },
  { icon: <SiPostman />, label: 'PostMan', progress: 100 },
  { icon: <SiMongodb />, label: 'MongoDB', progress: 60 },
  { icon: <FaFigma />, label: 'Figma', progress: 90 },
  { icon: <SiAdobexd />, label: 'AdobeXD', progress: 90 },
  { icon: <FaJava />, label: 'Java', progress: 70 },
  { icon: <FaPython />, label: 'Python', progress: 65 },
]

const Skills = () => {

  return (
    <Layout
      parentClassName={`bg-[#151515] relative z-0 `}
      id='skills'
    >
      <Image src={blob} alt='blob'
        className='absolute top-32 -left-14 -z-10'
      />
      <div className='bg-[#151515] rounded-[70px] drop-shadow-lg flex flex-col items-center p-14 gap-4 -translate-y-14'>
        <h1 className='font-bold text-4xl'>Skills</h1>
        <p className='text-[#b8b8b8] tracking-wider text-center'>
          Crazy front end developer who wants to explore every tech stack.
        </p>
        <div className='w-full flex flex-wrap gap-5 text-[#858d95] justify-center mt-10'>
          {skills.map((skill, i) => (
            <SkillList icon={skill.icon} label={skill.label} progress={skill.progress} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Skills