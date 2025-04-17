import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // configuration for chakraUI

  experimental: {
    optimizePackageImports: ["@chakra-ui/next-js"],
  },

  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/ **",
        search: "",
      },
    ],
  },
};

export default nextConfig;
