import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import Image from "next/image";
import useTextSplit from "hooks/useTextSplit";
import { useRef } from "react";
import { ChatDots } from "react-bootstrap-icons";

export default function MainHeader() {
  const textRef = useRef(null);

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
          fontSize={{ base: "2.8em", md: "4em" }}
          fontWeight={600}
          color="baseLight"
          lineHeight="1.3"
          textAlign="center"
          minH={{ base: "auto", md: "calc(2em * 1.3)" }}
        >
          CODING WITH PASSION, CREATING WITH PURPOSE
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="#e8e8e8"
          lineHeight="1.7"
          w={{ base: "full", md: "60vw" }}
          textAlign={"center"}
          my={2}
        >
          Welcome to my portfolio — a space where design meets technology to
          create meaningful, functional web experiences.
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
            <ChatDots />
            Let's Talk
          </Button>
          <Button
            border="sm"
            borderColor="baseLight"
            as="a"
            textDecoration="none"
            href="/#projects"
            size={"xl"}
          >
            View Portfolio
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
