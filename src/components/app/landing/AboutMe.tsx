import { Box, Flex, HStack, Span, Stack, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import H2Heading from "./H2Heading";
import { Button } from "@/components/Button";
import { SlideIn } from "@/components/Animations";
import { useCallback, useState } from "react";
import HeadingMarker from "./HeadingMarker";
import {
  Github,
  Linkedin,
  PersonWorkspace,
  TwitterX,
} from "react-bootstrap-icons";

export default function AboutMe() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const STACK: string[] = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

  const SOCIAL_ICONS: any[] = [
    {
      icon: <TwitterX size={20} color="neutralDark" />,
      href: "https://x.com/DevMasud",
      label: "Follow me on X",
      title: "@DevMasud",
    },
    {
      icon: <Linkedin size={20} color="neutralDark" />,
      href: "https://www.linkedin.com/in/dev-masud/",
      label: "Follow me on LinkedIn",
      title: "dev-masud",
    },
    {
      icon: <Github size={20} color="neutralDark" />,
      href: "https://github.com/dev-mas-ud/",
      label: "Follow me on Github",
      title: "dev-mas-ud",
    },
  ];

  const handleTouchStart = useCallback((e: any) => {
    const target: any = e.currentTarget;
    target.classList.add("translate-y");
  }, []);

  const handleTouchEnd = useCallback((e: any) => {
    const target: any = e.currentTarget;
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
      style={{ scrollMarginTop: "50px" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 16, md: 12 }}
      >
        <Box flex="1" zIndex={2} px={{ base: 2, md: 0 }}>
          <HeadingMarker text="Who I Am" />
          <H2Heading mb={2}>About Me</H2Heading>
          <Text fontSize="1.12em" lineHeight={1.9} mb={6} color="neutralDark">
            Hi, I'm Masud — a front-end developer focused on building fast,
            intuitive, and scalable web apps. I combine technical precision with
            design thinking to craft clean, high-performance interfaces that
            look great and perform flawlessly across devices.
          </Text>

          <Text fontSize="1.12em" lineHeight={1.9} mb={6} color="neutralDark">
            My core stack includes{" "}
            {STACK.map((stack: string, index: number) => (
              <Span key={`stack-${index}`} color="neutralDark">
                {stack}
                {", "}
              </Span>
            ))}
            allowing me to handle front-end experiences seamlessly. In addition
            to my front-end expertise, I also have solid back-end skills in
            Node.js, Express, Python, and databases such as MongoDB and MySQL.
            This enables me to manage projects end-to-end — from designing
            smooth UI to connecting secure backends.
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
              <PersonWorkspace /> Hire Me
            </Button>
            <Stack id="social-wrapper" gap={4}>
              <Span lineHeight={0} fontSize={".9em"} color={"#808080"}>
                Follow Me
              </Span>
              <Stack direction={"row"} gap={{ base: 5, md: 6 }}>
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
          gradientTo="neutralDark"
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
            h={"400px"}
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
