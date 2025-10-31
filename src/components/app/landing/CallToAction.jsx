import { Box, Container, Stack, Text } from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import ContackForm from "@/components/ContactForm";

export default function CTASection() {
  return (
    <Box
      id="contact"
      bg="baseLight"
      py={{ base: 16, md: 20 }}
      pt={{ base: 16, md: 20 }}
      px={{ base: 6, md: 20, lg: 40 }}
      style={{ scrollMarginTop: "50px" }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        w="full"
        alignItems={"center"}
        justifyContent="center"
      >
        <Container
          p={0}
          display={"flex"}
          flexDirection={"column"}
          w={{ base: "100%", md: "60%", lg: "50%" }}
        >
          <H2Heading align="center" px={{ base: 2, md: 0 }} mb={2}>
            Available for Work
          </H2Heading>
          <Text
            fontSize={{ base: "md", md: "md" }}
            color={"neutralDark"}
            mb={{ base: 4, md: 6 }}
            px={{ base: 3, md: 0 }}
            lineHeight="1.8"
            textAlign={"center"}
          >
            Reach out anytime, and I'll get back to you shortly.
          </Text>
        </Container>
        <ContackForm />
      </Box>
    </Box>
  );
}
