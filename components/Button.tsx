import { FC } from 'react'

interface Props {
    children: string[];
    className?: string;
}

const Button: FC<Props> = ({ children, className }) => {
    return (
        <button className={`${className} border font-bold py-4 px-6`}>{children}</button>
    )
}

export default Button