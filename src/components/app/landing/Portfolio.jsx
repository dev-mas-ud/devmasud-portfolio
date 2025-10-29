import {
  SimpleGrid,
  Box,
  Card,
  Span,
  useBreakpointValue,
  Stack,
  HStack,
  Badge,
  Button,
  Heading,
} from "@chakra-ui/react";

import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { ArrowUpRightSquareFill, Github } from "react-bootstrap-icons";
import HeadingMarker from "./HeadingMarker";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const PROJECTS = [
    {
      title: "EC2 Cloud Cost Analyzer",
      description:
        "AWS EC2 Cloud Cost Analyzer is a tool that helps you analyze the cost of your AWS EC2 instances. It is a web application that allows you to view the cost of your AWS EC2 instances and compare them with the cost of other AWS EC2 instances.",
      href: "https://ec2-observe.vercel.app/",
      repo: "https://github.com/dev-mas-ud/ec2-observer",
      imgUrl: "/images/ec2-observer.webp",
      stack: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "Tailwind CSS",
        "AWS EC2",
        "AWS CloudWatch",
      ],
    },
    {
      title: "AI-powered SaaS Platform",
      description:
        "A sleek and modern SaaS landing page showcasing an AI-powered platform designed to highlight innovation and performance. It features a clean layout, clear and compelling messaging, engaging visuals, and smooth animations that enhance user experience and drive conversions.",
      href: "https://convertly-nu.vercel.app/",
      repo: "https://github.com/dev-mas-ud/convertly",
      imgUrl: "/images/convertly.webp",
      stack: ["React", "Radix UI", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Mini Otio - AI Research Assistant",
      description:
        "A modern AI-powered research assistant that combines real-time web search with intelligent response generation. Users can ask research questions and receive comprehensive, streamed responses with multiple formatting options (step-by-step, bullet points, ELI5).",
      href: "https://mini-otio.vercel.app/",
      repo: "https://github.com/dev-mas-ud/mini-otio",
      imgUrl: "/images/mini-otio.webp",
      stack: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "TypeScript",
        "Zustand",
        "AI SDK",
        "Exa.ai",
      ],
    },
    {
      title: "UXpert - UI/UX Design Business Page",
      description:
        "A clean, responsive UI/UX design business landing page that blends modern aesthetics with intuitive user experience principles. It's crafted to showcase design expertise, build trust with potential clients, and guide visitors seamlessly toward engagement and conversion.",
      href: "https://uxpert-theta.vercel.app/",
      repo: "https://github.com/dev-mas-ud/uxpert",
      imgUrl: "/images/uxpert.webp",
      stack: ["React", "Tailwind CSS"],
    },
    {
      title: "Real-Estate Property Listing",
      description:
        "A modern, responsive real estate landing page built to showcase properties with stunning visuals, smooth navigation, and an intuitive user experience. It emphasizes clarity, elegance, and usability to help visitors explore listings effortlessly and take action with confidence.",
      href: "https://lumina-estate.vercel.app/",
      repo: "https://github.com/dev-mas-ud/lumina-estate",
      imgUrl: "/images/lumina-screenshot.webp",
      stack: ["Next.js", "Tailwind CSS", "Chakra UI"],
    },
    {
      title: "ICFC - Non-Governmental Organization Website",
      description:
        "A professional and responsive NGO website built to highlight ICFC's mission, programs, and community impact. It features a clean, accessible layout with thoughtful design elements that inspire trust, encourage engagement, and effectively communicate the organization's story and values.",
      href: "https://icfc-ngo.vercel.app/",
      repo: "https://github.com/dev-mas-ud/icfc-ngo",
      imgUrl: "/images/icfc-screenshot.webp",
      stack: ["Next.js", "Tailwind CSS", "Chakra UI"],
    },
  ];

  return (
    <Box
      id="projects"
      px={{ base: 6, md: 16 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      bg="neutralDark"
      style={{ scrollMarginTop: "50px" }}
    >
      <Stack align={"center"}>
        <Box>
          <HeadingMarker text="recent work" />
          <H2Heading color="baseLight">My Recent Projects</H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 2, 2]} gap={10}>
        {PROJECTS.map(
          ({ title, description, imgUrl, href, repo, stack }, index) => (
            <SlideIn
              key={`project-${index}`}
              direction={useBreakpointValue({ base: "right", md: "up" })}
            >
              <Card.Root
                rounded="3xl"
                bg="neutralDark"
                overflow={"hidden"}
                transition="all 0.3s"
                _hover={{
                  shadow: "xl",
                }}
              >
                <Card.Body
                  p={{ base: 4, md: 6 }}
                  overflow={"hidden"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  rounded="xl"
                >
                  <Box
                    position="relative"
                    overflow="hidden"
                    rounded="xl"
                    width="full"
                    maxH="270px"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(index)}
                    onTouchEnd={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={imgUrl}
                      alt={description}
                      width={400}
                      height={270}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        objectPosition: "top",
                        transform:
                          hoveredIndex === index
                            ? "translateY(calc(-100% + 250px))"
                            : "translateY(0)",

                        transition:
                          hoveredIndex === index
                            ? "transform 10s ease-in-out"
                            : ".3s",
                      }}
                    />
                  </Box>

                  <Stack
                    gap={2}
                    pt={5}
                    pb={2}
                    px={1}
                    justifyContent={"space-between"}
                  >
                    <Heading
                      as="h3"
                      lineHeight={1.5}
                      textAlign={"left"}
                      color="#fff"
                      fontSize={"1.4em"}
                    >
                      {title}
                    </Heading>
                    <Span
                      textAli
                      gn={"left"}
                      color="gray.400"
                      fontSize={"1em"}
                      lineClamp={3}
                    >
                      {description}
                    </Span>
                    <Stack gap={4} my={2}>
                      {stack?.length > 0 && (
                        <HStack gap={3} wrap="wrap">
                          {stack.map((stack, i) => (
                            <Span
                              key={`stack-${i}`}
                              // bg="whiteAlpha.200"
                              border={"sm"}
                              borderColor={"whiteAlpha.400"}
                              px={3}
                              py={1}
                              color="white"
                              fontSize={"sm"}
                              borderRadius="full"
                            >
                              {stack}
                            </Span>
                          ))}
                        </HStack>
                      )}
                    </Stack>

                    <HStack gap={4} wrap={"wrap"} mt={2}>
                      <Button
                        as="a"
                        color="gray.200"
                        fontWeight={"semibold"}
                        variant="ghost"
                        border={"sm"}
                        borderColor={"whiteAlpha.400"}
                        rounded="full"
                        rel="noopener noreferrer"
                        href={href}
                        target="_blank"
                        _hover={{
                          bg: "gray.800",
                        }}
                        size="sm"
                      >
                        <ArrowUpRightSquareFill /> Preview
                      </Button>
                      <Button
                        as="a"
                        color="gray.200"
                        fontWeight={"semibold"}
                        variant="ghost"
                        border={"sm"}
                        borderColor={"whiteAlpha.400"}
                        rounded="full"
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{
                          bg: "gray.800",
                        }}
                        size="sm"
                      >
                        <Github /> Github
                      </Button>
                    </HStack>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </SlideIn>
          )
        )}
      </SimpleGrid>
    </Box>
  );
}
