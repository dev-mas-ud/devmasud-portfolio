"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";
import { FullPageLoader } from "@/components/Loader";
import "../styles/globals.css";
import { useServiceWorker } from "hooks/useServiceWorker";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useRouteChangeHandler } from "hooks/useRouteChangeHandler";
import { Analytics } from "@vercel/analytics/next";
import GlobalMetaTags from "@/components/app/GlobalMetaTags";
import Head from "next/head";
import Script from "next/script";
import ScrollToTopButton from "@/components/ScrollToTop";
import { Stack } from "@chakra-ui/react";
import Layout from "Layout";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useRouteChangeHandler(router, setLoading, setError);
  useServiceWorker();

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
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bytedesignng" />
        <meta name="twitter:creator" content="@bytedesignng" />
        <meta
          name="twitter:title"
          content="ByteDesign - Affordable Web Design & Development in Nigeria"
        />
        <meta
          name="twitter:description"
          content="ByteDesign helps Nigerian businesses grow online with modern, mobile-friendly, and affordable websites."
        />
        <meta
          name="twitter:image"
          content="https://bytedesign.com.ng/images/og-banner.jpg"
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
              logo: "https://bytedesign.com.ng/images/android-chrome-512x512.png",
              image: "https://bytedesign.com.ng/images/og-banner.jpg",
              description:
                "ByteDesign creates affordable, mobile-friendly websites and web apps for Nigerian businesses.",
              telephone: "+2347065656558",
              email: "contact@bytedesign.com.ng",
              priceRange: "₦",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Allen Avenue", // update with real
                addressLocality: "Ikeja",
                addressRegion: "Lagos",
                postalCode: "100001",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.6018, // update with your coordinates
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
                "https://twitter.com/bytedesignng",
                "https://web.facebook.com/profile.php?id=61580101715902",
                "https://www.instagram.com/bytedesign", // add more if you have
                "https://www.linkedin.com/company/bytedesign",
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

      <Stack
        position={"fixed"}
        right={{ base: 5, md: 5 }}
        bottom={{ base: 5, md: 10 }}
        zIndex={1000}
        transition={".4s"}
        alignItems={"center"}
        gap={16}
      >
        <WhatsAppFloat />
        <ScrollToTopButton />
      </Stack>

      {/* Vercel's Components */}
      <Analytics />
    </Provider>
  );
}
