/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/**")],
    unoptimized: true,
  },
  distDir: "build",
  output: "export",
};

module.exports = nextConfig;
