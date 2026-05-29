const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
