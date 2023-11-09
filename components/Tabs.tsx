'use client';

import React, { useEffect, useState } from 'react'
import styles from './module.css/Tabs.module.css'
import TabItem from './TabItem';
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/contants'

const Tabs = () => {

    const [activeBtn, setActiveBtn] = useState(0);
    const [state, setState] = useState(true);
    const currentArr = projects.slice(activeBtn * 6, 6 + (activeBtn * 6))

    useEffect(() => {
        setState(e => !e);
    }, [activeBtn])

    useEffect(() => {
        setState(e => true);
    }, [])

    const tabClick = (i: number) => {
        setActiveBtn(e => i);
        setTimeout(() => {
            setState(e => !e);
        }, 300);
    }

    return (
        <>
            <div
                className='font-bold flex gap-2 p-2 rounded-xl bg-[#1a1a1a]/70'
            >
                {['Tab 1', 'Tab 2', 'Tab 3'].map((v: string, i: number) =>
                    <button key={i} onClick={() => activeBtn === i ? null : tabClick(i)} className={`${styles.tab} ${activeBtn === i ? styles.scaled : 'hover:bg-opacity-50 bg-[#1a1a1a]'} relative z-0 shadow-lg py-2 px-4 md:px-10 lg:px-16 rounded-xl transitions text-sm`}>{v}</button>
                )}
            </div>
            <AnimatePresence>
                {state &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { type: 'spring' } }}
                        exit={{ opacity: 0 }}
                        className='w-full flex gap-[10px] flex-wrap !overflow-hidden'>
                        {
                            currentArr.map(({ id, github, image, label, url }: {
                                id: number;
                                image: string;
                                label: string;
                                github: string;
                                url: string;
                            }) => (<TabItem
                                key={id}
                                id={id}
                                image={image}
                                label={label}
                                github={github}
                                url={url}
                            />))
                        }
                    </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Tabs