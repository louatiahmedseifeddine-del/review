import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The comparison page moved to the site root.
        source: "/best-red-light-therapy-mats",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
