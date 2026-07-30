import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/learn",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
