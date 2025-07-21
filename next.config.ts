import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
      return [
        {
          source: "/github",
          destination: "https://github.com/MGalaCyber",
          permanent: true,
        },
        {
          source: "/telegram",
          destination: "https://t.me/GalaXdOfficial",
          permanent: true,
        },
        {
          source: "/twitter",
          destination: "https://x.com",
          permanent: true,
        },
        {
          source: "/discord",
          destination: "https://discord.gg/VzGNhtmmfB",
          permanent: true,
        },
      ]
  }
};

export default nextConfig;
