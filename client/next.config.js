/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cross-Origin-Embedder-Policy",
              value: "unsafe-none",
            },
          ],
        }
      ];
    },
  }; 

module.exports = nextConfig
