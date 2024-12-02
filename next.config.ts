import type { NextConfig } from "next";
import path from "path"; // Import `path` correctly

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add alias for `@repo-2`
    config.resolve.alias = {
      ...config.resolve.alias,
      "@repo-2": path.resolve(__dirname, "../repo-2/src"),
    };
    return config;
  },
};

export default nextConfig;
