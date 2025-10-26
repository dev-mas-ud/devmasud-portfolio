import { DefaultSeo } from "next-seo";

export default function GlobalMetaTags() {
  return (
    <DefaultSeo
      defaultTitle="Masud — Front-End Developer | React Expert"
      description="I turn Figma designs into pixel-perfect, fast, and scalable React web applications. Focused on crafting modern, high-performance web experiences that look as good as they perform."
      canonical="https://bytedesign.com.ng/"
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "React developer, Front-End developer, Next.js developer, React developer, TypeScript developer, Tailwind CSS, JavaScript developer, UI developer, responsive web design, modern web development, pixel-perfect websites, frontend engineer",
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
        title: "Masud — Front-End Developer | React Expert",
        description:
          "I build fast, accessible, and SEO-friendly web applications using React, Next.js, Tailwind, and Shadcn UI.",
        locale: "en_US",
        images: [
          {
            url: "https://bytedesign.com.ng/images/og-banner.png",
            width: 1200,
            height: 630,
            alt: "Masud — Front-End Developer",
          },
          {
            url: "https://bytedesign.com.ng/images/og-banner.png",
            width: 2400,
            height: 1260,
            alt: "Masud — Front-End Developer",
          },
        ],
        site_name: "Masud — Front-End Developer",
      }}
    />
  );
}
