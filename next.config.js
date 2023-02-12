/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com/', 
      'github-readme-stats.vercel.app',
      'github-readme-stats-sigma-five.vercel.app',
      'github-profile-trophy.vercel.app',
      'iili.io',
      'i.postimg.cc',
      'picsum.photos'
    ]
  }
}

module.exports = nextConfig
