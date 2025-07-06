import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "deluxefarm-us.backendless.app",
      },
      {
        protocol: "https",
        hostname: "company-profile-purwadhika.vercel.app",
      },
      
    ],
    domains: [
      'company-profile-purwadhika.vercel.app',
      "randomuser.me"
    ]
  },
};

export default nextConfig;
