import React from "react";
import Head from "next/head";
import BlogTemplate from "./template";
import { DefaultSeo } from "next-seo";

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
        title="Website Development Costs in Nigeria: The Hidden Reality"
        imageURL="/images/blog/website-cost.webp"
        intro={`In today's fast-growing digital economy, Nigerian businesses cannot rely solely on physical stores. Your online presence is now a primary touchpoint for customers. But many entrepreneurs underestimate the true costs of building a professional website, leading to budget overruns and delayed launches. This guide uncovers realistic costs, hidden expenses, and actionable tips to maximize your investment.`}
        body={<BodyContent />}
        ctaHeading="Ready to Build Your Professional Website in Nigeria?"
        ctaText="I design and develop professional websites for Nigerian small businesses. Let's create a digital storefront that attracts customers and drives sales."
        ctaLink="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'm interested in a website for my business."
      />
    </>
  );
}

export function BodyContent() {
  return "body content";
}
