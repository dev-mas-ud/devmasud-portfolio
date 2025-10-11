import React from "react";
import BlogTemplate from "./template";
import { DefaultSeo } from "next-seo";
import { Text } from "@chakra-ui/react";

export default function BlogPost1() {
  return (
    <>
      <DefaultSeo
        defaultTitle="Websites by Masud - Creative Web Designer & Developer in Nigeria"
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
        openGraph={{
          type: "website",
          url: "https://bytedesign.com.ng/",
          title:
            "Websites by Masud - Creative Web Designer & Developer in Nigeria",
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
          ],
          site_name: "Websites by Masud",
        }}
      />

      <BlogTemplate
        category="Technology"
        title="Understanding Website Cost in Nigeria (2025)"
        imageURL="/images/blog/website-cost.webp"
        publishDate="October 10, 2025"
        readTime="15 min read"
        intro={
          "Website cost in Nigeria varies depending on the website type, features, and who builds it. Whether you are creating a business website, school website, or personal portfolio, understanding the pricing helps you plan better and avoid hidden costs"
        }
        subIntro="In 2025, a standard website in Nigeria costs between ₦50,000 and
        ₦700,000, depending on design quality, functionality, and hosting setup."
        body={<BodyContent />}
        ctaHeading="Ready to Build Your Professional Website in Nigeria?"
        ctaText="I design and develop professional websites for Nigerian small businesses. Let's create a digital storefront that attracts customers and drives sales."
        ctaLink="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'm interested in a website for my business."
      />
    </>
  );
}

export function BodyContent() {
  return (
    <>
      <Text fontSize="md">Body content</Text>
    </>
  );
}
