import { FC } from 'react'

interface Props {
    children: any;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<Props> = ({ children, className, type }) => {
    return (
        <button type={type} className={`${className} border font-bold py-4 px-6`}>{children}</button>
    )
}

export default Button