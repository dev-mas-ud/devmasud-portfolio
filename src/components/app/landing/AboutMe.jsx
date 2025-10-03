import { Box, Flex, HStack, Span, Stack, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import H2Heading from "./H2Heading";
import { Button } from "@/components/Button";
import { SlideIn } from "@/components/Animations";
import { useCallback, useState } from "react";
import HeadingMarker from "./HeadingMarker";
import { Github, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

export default function AboutMe() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const SOCIAL_ICONS = [
    {
      icon: <TwitterX size={20} color="#000000" />,
      href: "https://x.com/DevMasud",
      label: "Follow me on X",
      title: "@DevMasud",
    },
    {
      icon: <Instagram size={20} color="#000000" />,
      href: "https://www.instagram.com/dev__masud/",
      label: "Follow me on Instagram",
      title: "@dev__masud",
    },
    {
      icon: <Linkedin size={20} color="#000000" />,
      href: "https://www.linkedin.com/in/dev-masud/",
      label: "Follow me on LinkedIn",
      title: "dev-masud",
    },
    {
      icon: <Github size={20} color="#000000" />,
      href: "https://github.com/masud73",
      label: "Follow me on Facebook",
      title: "Websites by Masud",
    },
  ];

  const handleTouchStart = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.add("translate-y");
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.remove("translate-y");
  }, []);

  return (
    <Box
      id="about-me"
      as="section"
      bg="baseLight"
      py={{ base: 16, md: 14 }}
      pt={{ base: 10, md: 14 }}
      px={{ base: 6, md: 12 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 16, md: 12 }}
      >
        <Box flex="1" zIndex={2} px={{ base: 2, md: 0 }}>
          <HeadingMarker text="WHO AM I" />
          <H2Heading mb={2}>About Me</H2Heading>
          <Text fontSize="1.22em" lineHeight={1.9} mb={6} color="neutralDark">
            Hi, I'm Masud — a creative designer and developer who turns ideas
            into engaging digital experiences. I build visually striking,
            user-friendly, and performance-focused websites that showcase each
            brand's unique identity and help it grow.
          </Text>
          <HStack
            id="about-btns-wrapper"
            gap={{ base: 5, md: 10 }}
            align={"center"}
          >
            <Button
              as="a"
              href="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'am contacting from your website."
              target="_blank"
              variant="solid"
              size="xl"
              textDecoration="none"
            >
              Say Hi 👋
            </Button>
            <Stack id="social-wrapper" gap={4}>
              <Span lineHeight={0} fontSize={".9em"} color={"#808080"}>
                Follow Me
              </Span>
              <Stack direction={"row"} gap={6}>
                {SOCIAL_ICONS.map(({ href, label, title, icon }) => (
                  <Link
                    key={`footer-social-icon-${label}`}
                    href={label === "Send a mail" ? `mailto:${href}` : href}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </HStack>
        </Box>
        <Box
          bgGradient="to-r"
          gradientFrom="#08CB00"
          gradientTo="#000000"
          p={2}
          overflow={"hidden"}
          w={{ base: "100%", md: "30%" }}
          maxW={{ base: "100%", md: "30%" }}
          rounded="2xl"
          transition="all 0.5s"
          _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SlideIn
            isImage={true}
            isLoaded={isImageLoaded}
            flex={{ base: "unset", md: "1" }}
            position="relative"
            rounded="xl"
            overflow="hidden"
            h={{ base: "500px", md: "350px" }}
          >
            <Image
              src="/images/me.webp"
              alt="Affordable, modern, and mobile-friendly web design in Nigeria by ByteDesign — helping businesses grow online with fast websites and custom web apps."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 
           (max-width: 1280px) 50vw, 
           33vw"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "12px",
              }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </SlideIn>
        </Box>
      </Flex>
    </Box>
  );
}
