import { DefaultSeo } from "next-seo";

export default function GlobalMetaTags() {
  return (
    <DefaultSeo
      defaultTitle="Masud - Front-End Web Developer | React, Next.js, Javascript & Tailwind Css"
      description="I build fast, scalable, and visually engaging web webistes for startups, businesses, and personal projects worldwide. Specializing in React, Next.js, JavaScript, TypeScript, Tailwind CSS, and modern web solutions that perform and grow your brand."
      canonical="https://bytedesign.com.ng/"
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "Front-End developer, React developer, Next.js developer, TypeScript developer, JavaScript developer, web development, modern web apps, SaaS web apps, portfolio web developer, scalable web solutions",
        },
        {
          name: "charset",
          content: "utf-8",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "preload",
          href: "/fonts/poppins-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/poppins-semibold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-bold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ]}
      openGraph={{
        type: "website",
        url: "https://bytedesign.com.ng/",
        title:
          "Masud - Front-End Web Developer | React, Next.js, JavaScript & Tailwind CSS",
        description:
          "I design and develop fast, scalable, and modern web websites for clients and startups worldwide. From portfolios to custom SaaS platforms — I deliver solutions that perform and grow your brand.",
        locale: "en_US",
        images: [
          {
            url: "https://bytedesign.com.ng/images/og-banner.png",
            width: 1200,
            height: 630,
            alt: "Masud - Front-End Web Developer",
          },
          {
            url: "https://bytedesign.com.ng/images/og-banner.png",
            width: 2400,
            height: 1260,
            alt: "Masud - Front-End Web Developer",
          },
        ],
        site_name: "Masud - Front-End Web Developer",
      }}
    />
  );
}
