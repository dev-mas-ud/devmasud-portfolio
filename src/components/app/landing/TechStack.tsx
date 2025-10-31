import {
  Box,
  Container,
  Image,
  Flex,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import H2Heading from "./H2Heading";

const STACK: any[] = [
  { name: "React", src: "/images/react.svg" },
  { name: "Next.js", src: "/images/next.svg" },
  { name: "JavaScript", src: "/images/javascript.svg" },
  { name: "TypeScript", src: "/images/typescript.svg" },
  { name: "Tailwind CSS", src: "/images/tailwind.svg" },
  { name: "Node", src: "/images/nodejs.svg" },
  { name: "MongoDB", src: "/images/mongodb.svg" },
  { name: "MySQL", src: "/images/mysql.svg" },
  { name: "Python", src: "/images/python.svg" },
  { name: "HTML", src: "/images/html.svg" },
  { name: "CSS", src: "/images/css.svg" },
];

export default function TechStack() {
  return (
    <Box
      id="Stack"
      bg="neutralDark"
      py={{ base: 16, md: 20 }}
      pt={{ base: 12, md: 20 }}
      px={0}
    >
      <Container maxW="container.lg" p="0">
        <Stack align={"center"} px={3}>
          <Box>
            <H2Heading color="baseLight">My Tech Stack</H2Heading>
          </Box>
        </Stack>

        <Box overflow="hidden" width="100%" py={5}>
          <Marquee
            pauseOnHover
            gradientWidth={useBreakpointValue({ base: 70, md: 100 })}
          >
            <Flex as="div" align="center" gap={12} whiteSpace={"nowrap"}>
              {[...STACK, ...STACK].map((tech, index) => (
                <Box key={`stack-${index}`} minW="70px">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    boxSize="70px"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Flex>
          </Marquee>
        </Box>
      </Container>
    </Box>
  );
}
