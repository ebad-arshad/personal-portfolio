import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FaEarthAmericas } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

interface Props {
    id: number;
    image: string;
    label: string;
    github: string;
    url: string;
}

const TabItem: FC<Props> = ({ id, github, image, label, url }) => {

    const [hoveredImg, setHoveredImg] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setHoveredImg(e => true)}
            onHoverEnd={() => setHoveredImg(e => false)}
            className={`min-w-full min-h-[180px] sm:min-w-[275px] sm:max-w-[calc(50%-5px)] md:min-w-[339px] lg:min-w-[295px] lg:w-[calc(32.9%-3px)] rounded-2xl overflow-hidden transitions relative cursor-pointer`}
        >
            <motion.div
                initial={{ y: -270 }}
                animate={{ y: hoveredImg ? 0 : -270, transition: { type: 'tween', duration: .1, delay: 0 } }}
                className={`absolute top-0 left-0 w-full h-full bg-white/20 bg-gradient-to-r from-[#aa367c]/60 to-[#4a2fbd]/60 transition duration-1000 flex flex-col justify-between items-center p-5`} >
                <p className='font-bold text-md text-center'>{label} {id}</p>
                <div className='flex items-center gap-2'>
                    <span className='text-md bg-black rounded-full p-2'><Link href={url}><FaEarthAmericas /></Link></span>
                    <span className='text-md bg-black rounded-full p-2'><Link href={github}><FiGithub /></Link></span>
                </div>
            </motion.div>
            <Image
                src={image}
                width={1000}
                height={0}
                className='w-full h-full object-cover'
                alt='project pic' />
        </motion.div>
    )
}

export default TabItem