/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'avatars.githubusercontent.com',
      'loremflickr.com',
      // add any other domains you use for images
    ],
  },
};

module.exports = nextConfig;
