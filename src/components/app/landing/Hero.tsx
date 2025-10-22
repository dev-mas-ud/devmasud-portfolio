import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import Image from "next/image";
import useTextSplit from "hooks/useTextSplit";
import { useRef } from "react";
import { PersonWorkspace } from "react-bootstrap-icons";

export default function Hero() {
  const textRef: any = useRef(null);

  useTextSplit(textRef);

  return (
    <Box
      as="header"
      overflow={"hidden"}
      height={"100vh"}
      width={"full"}
      position="relative"
      mt={-24}
      px={{ base: 8, md: 16, xl: 20 }}
      py={{ base: 14, md: 28 }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bg="#000000"
    >
      <Image
        src={"/images/coding.webp"}
        height={256}
        width={256}
        alt="programing languages"
        priority
        fetchPriority="high"
        style={{
          objectFit: "cover",
          position: "absolute",
          height: "256px",
          width: "256px",
          transform: "translate(-50%, -50%)",
          opacity: "0.15",
          top: "85%",
          left: "50%",
        }}
      />

      <VStack justify={"center"} m={{ base: 0, md: 2 }} gap={4}>
        <Heading
          ref={textRef}
          className="pre-split"
          as="h1"
          w="full"
          mt={{ base: 4, md: 0 }}
          fontSize={{ base: "3.3em", md: "4.3em" }}
          fontWeight={600}
          color="baseLight"
          lineHeight="1.3"
          textAlign="center"
          minH={{ base: "auto", md: "calc(2em * 1.3)" }}
        >
          Hi, I'm Masud — Your Front-End Developer ✨
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.300"
          lineHeight="1.7"
          w={{ base: "full", md: "60vw", lg: "40vw" }}
          textAlign={"center"}
          my={{ base: 1, md: 0 }}
        >
          I turn Figma designs into pixel-perfect, high-performance React apps.
        </Text>

        <HStack justify={"center"} w={"full"} mt={4} gap={{ base: 4, md: 6 }}>
          <Button
            as="a"
            textDecoration="none"
            href="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'm contacting from your website."
            target="_blank"
            size={"xl"}
            variant="solid"
          >
            <PersonWorkspace /> Hire Me
          </Button>
          <Button
            border="sm"
            borderColor="baseLight"
            as="a"
            textDecoration="none"
            href="/#projects"
            size={"xl"}
          >
            View My Work
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
