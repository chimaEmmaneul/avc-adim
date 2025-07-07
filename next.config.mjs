/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/azany-inc/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
