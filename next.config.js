/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongodb", "@auth/mongodb-adapter"],
  },
};

module.exports = nextConfig;
