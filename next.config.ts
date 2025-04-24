import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ This fixes the error
  },
};

export default nextConfig;


