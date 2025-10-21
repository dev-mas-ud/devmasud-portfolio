"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";
import { FullPageLoader } from "@/components/Loader";
import { useRouteChangeHandler } from "hooks/useRouteChangeHandler";
import { Analytics } from "@vercel/analytics/next";
import GlobalMetaTags from "@/components/app/GlobalMetaTags";
import Head from "next/head";
import Script from "next/script";
import ScrollToTopButton from "@/components/ScrollToTop";
import Layout from "Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useRouteChangeHandler(router, setLoading, setError);

  const pathname = router.pathname;
  const is404 = pageProps.notFound || pathname === "/404";

  // Track route changes for GA
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", "G-V4TM0E6HQ6", {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const renderContent = () => {
    if (loading) return <FullPageLoader />;
    if (!Component) return <h1>Page not found</h1>;
    return <Component {...pageProps} />;
  };

  if (error) {
    return (
      <Provider>
        <h1>{error}</h1>
      </Provider>
    );
  }

  return (
    <Provider p={0} m={0}>
      <GlobalMetaTags />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DevMasud" />
        <meta name="twitter:creator" content="@DevMasud" />
        <meta
          name="twitter:title"
          content="Masud — Front-End Developer | Figma to React & Next.js Expert"
        />
        <meta
          name="twitter:description"
          content="I specialize in converting Figma designs into pixel-perfect, high-performance React/Next.js applications. Clean, scalable, and built for modern web standards."
        />
        <meta
          name="twitter:image"
          content="https://bytedesign.com.ng/images/og-banner.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://bytedesign.com.ng/#organization",
              name: "ByteDesign",
              url: "https://bytedesign.com.ng",
              image: "https://bytedesign.com.ng/images/og-banner.png",
              description:
                "I build fast, scalable, and visually engaging web webistes for startups, businesses, and personal projects worldwide. Specializing in React, Next.js, JavaScript, TypeScript, Tailwind CSS, and modern web solutions that perform and grow your brand.",
              telephone: "+2347065656558",
              email: "contact@bytedesign.com.ng",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Allen Avenue",
                addressLocality: "Ikeja",
                addressRegion: "Lagos",
                postalCode: "100001",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.6018,
                longitude: 3.3515,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://twitter.com/devmasud",
                "https://web.facebook.com/profile.php?id=61581299132973",
                "https://www.linkedin.com/in/dev-masud",
                "https://github.com/dev-mas-ud",
              ],
              areaServed: [
                {
                  "@type": "Place",
                  name: "Nigeria",
                },
                {
                  "@type": "Place",
                  name: "Lagos",
                },
                {
                  "@type": "Place",
                  name: "Abuja",
                },
              ],
              serviceType: [
                "Web Design",
                "Web Development",
                "Landing Pages",
                "Custom Web Apps",
              ],
            }),
          }}
        />
      </Head>

      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-V4TM0E6HQ6`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V4TM0E6HQ6', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {is404 ? renderContent() : <Layout>{renderContent()}</Layout>}

      <ScrollToTopButton />
      <Analytics />
    </Provider>
  );
}
