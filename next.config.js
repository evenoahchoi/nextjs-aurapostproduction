/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'www.notion.so' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com' },
      { hostname: 'amazonaws.com' },
      { hostname: 's3.us-west-2.amazonaws.com' },
      { hostname: 'us-west-2.amazonaws.com' },
      { hostname: 'i.ibb.co' },
      { hostname: 'i.postimg.cc' },
      { hostname: 'postimg.cc' },
      { hostname: 'googleusercontent.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'postfiles.pstatic.net' },
      { hostname: 'blogfiles.pstatic.net' },
      { hostname: 'www.fashion4you.co.kr' },
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: '10mb', // 원하는 크기로 설정 (예: 10MB)
    },
  },
}

module.exports = nextConfig;
