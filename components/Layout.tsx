import React, { FC } from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
    id?: string;
}

const Layout: FC<Props> = ({ children, className, parentClassName, id }) => {
    return (
        <div className={`${parentClassName} w-full`} id={id}>
            <div className={`px-10 md:container mx-auto !bg-transparent ${className}`}>{children}</div>
        </div>
    )
}

export default Layout