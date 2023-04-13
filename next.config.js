const withPlugins = require("next-compose-plugins");

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "velog.velcdn.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "http", hostname: "10.150.151.237" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig,
);
