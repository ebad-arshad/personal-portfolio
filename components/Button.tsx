import { FC } from 'react'

interface Props {
    children: any;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    href?: string;
    handleClick?: () => void;
}

const Button: FC<Props> = ({ children, className, type, href, handleClick }) => {
    if (href) return (
        <a onClick={handleClick} href={href}>
            <button type={type} className={`${className} border font-bold py-4 px-6`}>{children}</button>
        </a>
    )
    return (
        <button onClick={handleClick} type={type} className={`${className} border font-bold py-4 px-6`}>{children}</button>
    )
}

export default Button