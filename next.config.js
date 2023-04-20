const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "velog.velcdn.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "http", hostname: "10.150.151.237" },
      { protocol: "http", hostname: "ec2-3-34-192-167.ap-northeast-2.compute.amazonaws.com" },
      { protocol: "https", hostname: "novel-cloud-bucket.s3.ap-northeast-2.amazonaws.com" },
      { protocol: "https", hostname: "dla8whnq5d71w.cloudfront.net" },
    ],
  },
};

module.exports = nextConfig;
