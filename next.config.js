/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e1.pxfuel.com',
            },
        ],
    },
    env: {
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        PUBLIC_KEY: process.env.PUBLIC_KEY,
    },
}

module.exports = nextConfig