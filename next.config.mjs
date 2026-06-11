/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  allowedDevOrigins: ["127.0.0.1"],
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
