/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "*", // Allow all domains
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
