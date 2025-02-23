/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disables strict mode to reduce unnecessary renders
    compiler: {
      removeConsole: true, // Removes console logs in production
    },
    eslint: {
      ignoreDuringBuilds: true, // Skips ESLint checks during builds
    },
    experimental: {
      optimizeCss: true, // Improves CSS processing speed
    },
  };
  
  export default nextConfig;
  