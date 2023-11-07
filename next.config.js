/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e1.pxfuel.com',
            },
        ],
    }
}

module.exports = nextConfig