import path from "path";

const __dirname = path.resolve();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    nextScriptWorkers: true,
  },
  swcMinify: true,
};

export default nextConfig;
