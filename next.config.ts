import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  allowedDevOrigins: ["10.205.250.240"],
};

export default nextConfig;