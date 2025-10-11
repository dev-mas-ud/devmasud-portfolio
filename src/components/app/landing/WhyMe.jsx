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
      title: "Modern Websites for Business Growth",
      description:
        "I build responsive websites that boost visibility and help Nigerian businesses reach more clients online.",
    },
    {
      icon: <FaHandshake size={37} color="#08CB00" />,
      title: "Personal Support From Start to Finish",
      description:
        "I work with you step by step, from idea to launch, to build a site that fits your goals and speaks to your audience.",
    },
    {
      icon: <FaShield size={37} color="#08CB00" />,
      title: "Fast, Secure, modern & Affordable",
      description:
        "Every website is built to load quickly, stay secure, and remain affordable—so you get real value for your money.",
    },
  ];

  return (
    <Box
      bg="secondary"
      px={{ base: 3, md: 16 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
    >
      <Stack align={"center"} px={4}>
        <Box>
          <HeadingMarker text="my edge" />
          <H2Heading color="baseLight">Why Clients Choose Me</H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 1, 3]} gap={10} px={4}>
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
