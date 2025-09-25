import { Box, Card, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import { Button } from "@/components/Button";
import { Check } from "react-bootstrap-icons";
import { SlideIn } from "@/components/Animations";

export default function Pricing() {
  const PLANS = [
    {
      title: "Basic",
      price: 30000,
      features: [
        "Basic Website",
        "Free Domain (.com.ng)",
        "Free SSL Certificate",
        "Free Hosting",
        "2 Minor Edits per Year",
      ],
    },
    {
      title: "Standard",
      price: 80000,
      features: [
        "Standard Website (2 - 4 Pages)",
        "Free Domain + SSL Certificate",
        "Free Hosting",
        "Up to 5 Minor Edits per Year",
        "2 Professional Business Emails",
        "SEO Optimization",
      ],
    },
    {
      title: "Premium",
      price: 120000,
      features: [
        "Premium Site (4 - 7 Pages)",
        "1 Custom Domain",
        "Free SSL Certificate",
        "Premium Cloud Hosting",
        "Unlimited Minor Edits",
        "Up to 10 Business Emails",
        "SEO + Google Business Profile",
        "Chat-bot Widget Included",
      ],
    },
  ];

  return (
    <Box
      id="pricing"
      px={{ base: 2, md: 10, lg: 20 }}
      py={{ base: 8, md: 10 }}
      bg="#fff"
    >
      <H2Heading mb={8} mt={0} textAlign="center">
        Pricing
      </H2Heading>

      <Flex
        p={0}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        px={{ md: 8, lg: 4 }}
      >
        <SlideIn>
          <SimpleGrid
            columns={[1, 1, 2, 3]}
            gap={8}
            px={{ base: 4, md: 4 }}
            w="full"
          >
            {PLANS.map((plan, index) => (
              <SlideIn key={`plan-${index}`}>
                <PlanCard {...plan} />
              </SlideIn>
            ))}
          </SimpleGrid>
        </SlideIn>
      </Flex>
    </Box>
  );
}

function PlanCard({ title, price, features }) {
  return (
    <Card.Root border="none" shadow="xl" rounded="xl" p={1}>
      <Card.Body pt={4}>
        <Card.Title
          color="gray.600"
          fontSize={"1.4em"}
          fontWeight="normal"
          textAlign="center"
        >
          {title}
        </Card.Title>

        <Text
          textAlign="center"
          fontSize="1.8em"
          fontWeight="semibold"
          mt={2}
          color="primary"
        >
          <sup
            style={{ fontWeight: 400, fontSize: ".7em", marginRight: ".1rem" }}
          >
            ₦
          </sup>
          {price / 1000}K
        </Text>

        <Stack gap={3} mt={5}>
          {features.map((feature, i) => (
            <Box key={i} display="flex">
              <Check size={22} color="#1DBF73" />
              <Text ml={2} color="gray.500" fontSize={"1.1em"}>
                {feature}
              </Text>
            </Box>
          ))}
        </Stack>
      </Card.Body>

      <Card.Footer>
        <Button
          as="a"
          textDecoration="none"
          variant="solid"
          href="https://wa.me/message/43ZJUJZP7IJFE1"
          target="_blank"
          size="lg"
          w="full"
        >
          Choose Plan
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
