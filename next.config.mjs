export default {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/:path*",
      },
      {
        source: "/flw/:path*",
        destination: "https://api.flutterwave.com/v3/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "header", key: "accept", value: "text/html" }],
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=0, s-maxage=86400",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/og-banner.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          { key: "Accept-Ranges", value: "none" },
        ],
      },
    ];
  },
};
