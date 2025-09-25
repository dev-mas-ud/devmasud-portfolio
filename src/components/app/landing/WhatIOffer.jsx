import { Box, Heading, SimpleGrid, Text, Flex, Stack } from "@chakra-ui/react";
import { FaCode, FaSearch, FaWrench } from "react-icons/fa";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { FaCartShopping } from "react-icons/fa6";
import HeadingMarker from "./HeadingMarker";

const services = [
  {
    title: "Custom Website Design & Development",
    description:
      "Building modern, responsive websites from scratch or redesigning existing ones — tailored to the client's goals, brand identity, and target audience.",
    icon: FaCode,
  },
  {
    title: "SEO Optimization & Performance",
    description:
      "Improving site speed, SEO fundamentals, and accessibility so pages load fast, rank better on search engines, and work smoothly across devices.",
    icon: FaSearch,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Providing ongoing updates, bug fixes, security enhancements, and fresh content to keep your website fast, secure, and reliable.",
    icon: FaWrench,
  },
  {
    title: "E-Commerce & Integrations",
    description:
      "Creating online stores (Shopify, WooCommerce, custom solutions) and integrating third-party tools (payments, CRMs, analytics, APIs) to extend functionality.",
    icon: FaCartShopping,
  },
];

export default function WhatIOffer() {
  return (
    <Box
      id="services"
      bg="secondary"
      as="section"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 14 }}
      px={{ base: 6, md: 12 }}
    >
      <Box maxW="1200px" mx="auto" textAlign="center">
        <Stack align={"center"}>
          <Box>
            <HeadingMarker text="what i offer" />
            <H2Heading color="baseLight">
              Here's What I Can Do for You
            </H2Heading>
          </Box>
        </Stack>
        <SlideIn>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            gap={{ base: 8, md: 10 }}
          >
            {services.map((service, index) => (
              <SlideIn
                key={index}
                bg="baseLight"
                overflow={"hidden"}
                rounded="3xl"
                shadow="md"
                _hover={{
                  shadow: "2xl",
                  transform: "translateY(-6px)",
                }}
              >
                <Flex
                  py={4}
                  direction="column"
                  align="center"
                  justify={"center"}
                  w="full"
                  shadow={"2xl"}
                >
                  <Box as={service.icon} size="40px" color="primary" />
                </Flex>
                <Box p={6}>
                  <Heading
                    as="h3"
                    size="md"
                    fontSize={"1.3em"}
                    mb={3}
                    color="neutralDark"
                  >
                    {service.title}
                  </Heading>
                  <Text
                    color="gray.600"
                    textAlign={"left"}
                    fontSize="md"
                    lineHeight={1.9}
                  >
                    {service.description}
                  </Text>
                </Box>
              </SlideIn>
            ))}
          </SimpleGrid>
        </SlideIn>
      </Box>
    </Box>
  );
}
