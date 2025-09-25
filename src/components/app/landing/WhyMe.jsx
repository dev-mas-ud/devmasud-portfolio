import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import FeatureCard from "@/components/app/landing/components/FeaturedCard";
import H2Heading from "./H2Heading";
import { FaCode, FaHandshake } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { SlideIn } from "@/components/Animations";
import HeadingMarker from "./HeadingMarker";

export default function WhyMe() {
  const features = [
    {
      icon: <FaCode size={37} color="#08CB00" />,
      title: "6+ Years Creating Websites",
      description:
        "I combine design and development skills to create responsive, user-friendly websites with seamless experiences.",
    },
    {
      icon: <FaHandshake size={37} color="#08CB00" />,
      title: "More Than Just a Developer",
      description:
        "I work closely with you from idea to launch, building solutions tailored to your goals and brand identity.",
    },
    {
      icon: <FaShield size={37} color="#08CB00" />,
      title: "Modern & Secure Websites",
      description:
        "Every site is optimized for speed and security, using modern tools and best practices to support growth.",
    },
  ];

  return (
    <Box
      bg="neutralDark"
      px={{ base: 3, md: 16 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
    >
      <Stack align={"center"} px={4}>
        <Box>
          <HeadingMarker text="why choose me" />
          <H2Heading color="baseLight">
            Why You'll Love Working With Me
          </H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 1, 3]} gap={{ base: 8, md: 10 }} px={4}>
        {features.map(({ icon, title, description }, index) => (
          <SlideIn key={`WhyMe-${index}`}>
            <FeatureCard
              shadow="lg"
              icon={icon}
              title={title}
              description={description}
            />
          </SlideIn>
        ))}
      </SimpleGrid>
    </Box>
  );
}
