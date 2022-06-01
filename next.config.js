/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICEID: process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
    NEXT_PUBLIC_EMAILJS_TEMPLATEID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
    NEXT_PUBLIC_EMAILJS_PUBLICKEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
  }
}

module.exports = nextConfig
