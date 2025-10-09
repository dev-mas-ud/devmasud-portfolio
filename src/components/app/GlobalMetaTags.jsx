import { DefaultSeo } from "next-seo";

export default function GlobalMetaTags() {
  return (
    <DefaultSeo
      defaultTitle="Websites by Masud - Creative Web Design & Development in Nigeria"
      description="Websites by Masud helps individuals and businesses build modern, mobile-friendly, and affordable websites. From portfolios to custom web apps — I design and develop sites that perform and grow your brand."
      canonical="https://bytedesign.com.ng/"
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "websites by Masud, web design Nigeria, affordable website development Nigeria, personal portfolio web designer Nigeria, Lagos web designer, business website Nigeria, custom websites Nigeria, React.js developer Nigeria",
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
          "Websites by Masud - Creative Web Design & Development in Nigeria",
        description:
          "I design and develop affordable, modern websites for individuals and businesses in Nigeria. Fast, mobile-friendly, and tailored to your goals.",
        locale: "en_NG",
        images: [
          {
            url: "https://bytedesign.com.ng/images/dev-laptop.png",
            width: 1200,
            height: 630,
            alt: "Websites by Masud - Creative Web Developer Nigeria",
          },
          {
            url: "https://bytedesign.com.ng/images/dev-laptop.png",
            width: 2400,
            height: 1260,
            alt: "Websites by Masud - Creative Web Developer Nigeria",
          },
        ],
        site_name: "Websites by Masud",
      }}
    />
  );
}
