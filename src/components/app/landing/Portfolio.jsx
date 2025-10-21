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
} from "@chakra-ui/react";

import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { ArrowUpRightSquare, Github } from "react-bootstrap-icons";
import HeadingMarker from "./HeadingMarker";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const PROJECTS = [
    {
      description:
        "A clean, responsive business landing page combining modern UI design with intuitive UX to engage visitors and drive conversions.",
      href: "https://uxpert-theta.vercel.app/",
      repo: "https://github.com/dev-mas-ud/uxpert",
      imgUrl: "/images/uxpert.webp",
      stack: ["React", "Tailwind CSS"],
    },
    {
      description:
        "A sleek SaaS landing page showcasing an AI-powered platform with modern design, clear messaging, and engaging visuals.",
      href: "https://convertly-nu.vercel.app/",
      repo: "https://github.com/dev-mas-ud/convertly",
      imgUrl: "/images/convertly.webp",
      stack: ["React", "Radix UI", "Tailwind CSS", "Framer Motion"],
    },
    {
      description:
        "A modern, responsive real estate landing page designed to showcase properties with clean visuals and an intuitive user experience.",
      href: "https://lumina-estate.vercel.app/",
      repo: "https://github.com/dev-mas-ud/lumina-estate",
      imgUrl: "/images/lumina-screenshot.webp",
      stack: ["Next.js", "Tailwind CSS", "Chakra UI"],
    },
    {
      description:
        "A professional NGO website designed to highlight ICFC's mission, programs, and community impact through a clean, accessible layout.",
      href: "https://icfc-ngo.vercel.app/",
      repo: "https://github.com/dev-mas-ud/icfc-ngo",
      imgUrl: "/images/icfc-screenshot.webp",
      stack: ["Next.js", "Tailwind CSS", "Chakra UI"],
    },
  ];

  return (
    <Box
      id="projects"
      px={{ base: 6, md: 10 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      bg="neutralDark"
    >
      <Stack align={"center"}>
        <Box>
          <HeadingMarker text="recent work" />
          <H2Heading color="baseLight">My Recent Projects</H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 2, 2, 4]} gap={8}>
        {PROJECTS.map(({ description, imgUrl, href, repo, stack }, index) => (
          <SlideIn
            key={`project-${index}`}
            direction={useBreakpointValue({ base: "right", md: "up" })}
          >
            <Card.Root
              rounded="3xl"
              bg="baseLight"
              overflow={"hidden"}
              transition="all 0.3s"
              _hover={{
                shadow: "xl",
              }}
            >
              <Card.Body
                p={0}
                overflow={"hidden"}
                justifyContent={"center"}
                alignItems={"center"}
                rounded="2xl"
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  width="full"
                  maxH="200px"
                  minHeight="200px"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                >
                  <Image
                    src={imgUrl}
                    alt={description}
                    width={400}
                    height={200}
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

                <Stack gap={3} p={4}>
                  {stack?.length > 0 && (
                    <HStack gap={2} wrap="wrap">
                      {stack.map((stack, i) => (
                        <Badge
                          variant={"subtle"}
                          key={`stack-${i}`}
                          bg="gray.200"
                          px={2.5}
                          fontWeight={"semibold"}
                          py={1}
                          colorPalette={"black"}
                        >
                          {stack}
                        </Badge>
                      ))}
                    </HStack>
                  )}

                  <Span textAlign={"left"} color="gray.600" fontSize={"1em"}>
                    {description}
                  </Span>

                  <HStack gap={4} wrap={"wrap"}>
                    <Button
                      as="a"
                      color="neutralDark"
                      fontWeight={"semibold"}
                      variant="ghost"
                      bg="gray.200"
                      rounded="full"
                      rel="noopener noreferrer"
                      href={href}
                      target="_blank"
                      _hover={{
                        bg: "gray.300",
                      }}
                      size="sm"
                    >
                      <ArrowUpRightSquare /> Live Demo
                    </Button>
                    <Button
                      as="a"
                      color="neutralDark"
                      fontWeight={"semibold"}
                      variant="ghost"
                      bg="gray.200"
                      rounded="full"
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      _hover={{
                        bg: "gray.300",
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
        ))}
      </SimpleGrid>
    </Box>
  );
}
