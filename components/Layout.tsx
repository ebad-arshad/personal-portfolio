import React, { FC } from 'react'

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Layout: FC<Props> = ({ children, className }) => {
    return (
        <div className={`px-4 md:container mx-auto md:px-10 ${className}`}>{children}</div>
    )
}

export default Layout