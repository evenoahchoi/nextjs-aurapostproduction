/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'amazonaws.com',
      's3.us-west-2.amazonaws.com',
      'us-west-2.amazonaws.com',
      'i.ibb.co',
      'i.postimg.cc',
      'postimg.cc'
    ]
  }
}

module.exports = nextConfig
