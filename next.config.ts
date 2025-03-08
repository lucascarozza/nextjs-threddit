import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.thumbs.redditmedia.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "preview.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.imgur.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
