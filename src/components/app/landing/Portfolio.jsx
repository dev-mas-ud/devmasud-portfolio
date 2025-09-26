import {
  SimpleGrid,
  Box,
  Card,
  Span,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

import H2Heading from "./H2Heading";
import Image from "next/image";
import { SlideIn } from "@/components/Animations";
import { Button } from "@/components/Button";
import { ArrowUpRightSquare } from "react-bootstrap-icons";
import HeadingMarker from "./HeadingMarker";

export default function Portfolio() {
  const PROJECTS = [
    {
      title: "Event Planning Landing Page",
      href: "https://masud73.github.io/event-planner/",
      imgUrl: "/images/event-planner.jpg",
    },
    {
      title: "Dental Clinic Landing Page",
      href: "https://masud73.github.io/dental-clinic/",
      imgUrl: "/images/dental-clinic.webp",
    },
    {
      title: "Restaurant Landing Page",
      href: "https://masud73.github.io/my-restaurant/",
      imgUrl: "/images/restaurant.webp",
    },
    {
      title: "Woman Salon Landing Page",
      href: "https://masud73.github.io/glow-salon/",
      imgUrl: "/images/glow-salon.webp",
    },
  ];

  return (
    <Box
      id="projects"
      px={{ base: 6, md: 10 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      bg="secondary"
    >
      <Stack align={"center"}>
        <Box>
          <HeadingMarker text="recent works" />
          <H2Heading color="baseLight">My Recent Projects</H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {PROJECTS.map(({ title, imgUrl, href }, index) => (
          <SlideIn
            key={`project-${index}`}
            direction={useBreakpointValue({ base: "right", md: "up" })}
          >
            <Card.Root
              cursor={"pointer"}
              outline={"none"}
              textDecoration={"none"}
              as="a"
              rel="noopener noreferrer"
              href={href}
              target="_blank"
              rounded="3xl"
              bg="baseLight"
              overflow={"hidden"}
              transition="all 0.3s"
              _hover={{
                shadow: "xl",
                transform: "translateY(-6px)",
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
                  maxH="250px"
                  minHeight="250px"
                  transition="all 0.3s"
                  _hover={{
                    filter: "brightness(70%)",
                  }}
                >
                  <Image
                    src={imgUrl}
                    alt={title}
                    width={600}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      objectPosition: "top",
                    }}
                    sizes="100%"
                  />
                </Box>

                <Span
                  my={4}
                  px={1}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"1.2em"}
                >
                  {title}
                </Span>
                <Button variant="solid" size="lg" mb={6}>
                  Check Out <ArrowUpRightSquare />{" "}
                </Button>
              </Card.Body>
            </Card.Root>
          </SlideIn>
        ))}
      </SimpleGrid>
    </Box>
  );
}
