import { Box, Container, Image, Flex, Stack } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

const techs = [
  { name: "HTML", src: "/images/html.svg" },
  { name: "CSS", src: "/images/css.svg" },
  { name: "JavaScript", src: "/images/javascript.svg" },
  { name: "TypeScript", src: "/images/typescript.svg" },
  { name: "React", src: "/images/react.svg" },
  { name: "Next.js", src: "/images/next.svg" },
  { name: "TailwindCSS", src: "/images/tailwind.svg" },
  { name: "Node.js", src: "/images/nodejs.svg" },
  { name: "Express", src: "/images/express.svg" },
  { name: "MongoDB", src: "/images/mongodb.svg" },
  { name: "MySQL", src: "/images/mysql.svg" },
  { name: "Python", src: "/images/python.svg" },
  { name: "AWS", src: "/images/aws.svg" },
  { name: "Google Cloud", src: "/images/google-cloud.svg" },
];

export default function TechStack() {
  return (
    <Box
      id="Stack"
      bg="baseLight"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={0}
    >
      <Container maxW="container.lg" p="0">
        <Stack align={"center"} px={3}>
          <Box>
            <HeadingMarker text="technology" />
            <H2Heading>My Tech Stack</H2Heading>
          </Box>
        </Stack>

        <Box overflow="hidden" as="marquee" width="100%" py={5}>
          <Flex as="div" align="center" gap={12} whiteSpace={"nowrap"}>
            {[...techs, ...techs].map((tech, idx) => (
              <Box key={idx} minW="70px">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  boxSize="70px"
                  objectFit="contain"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
