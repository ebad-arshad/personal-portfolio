import { FC } from 'react'
import styles from './module.css/Skills.module.css'

interface Props {
    icon: React.JSX.Element;
    label: string;
    progress: number;
}

const SkillList: FC<Props> = ({ icon, label, progress }) => {
    return (
        <span className={`${styles.skillItem} text-5xl md:text-8xl flex flex-col items-center gap-2  hover:text-[#4e3196] transitions cursor-pointer active:text-opacity-70`}>
            {icon}
            <p className='text-[10px] md:text-xs font-bold'>{label}</p>
            <div className='progress' />
            <progress value={progress} max="100" className={`text-[8px] ${styles.progress}`} />
        </span>
    )
}

export default SkillList