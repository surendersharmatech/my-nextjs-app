import { redirect } from "next/dist/server/api-utils";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.foodiesfeed.com", // ✅ added
      },
    ],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/",
  //       permanent: true,
  //     },
     
  //   ];
  // }
};

export default nextConfig;
