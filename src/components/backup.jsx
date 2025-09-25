import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
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
      bg="#000"
    >
      <Image
        src={"/images/coding.png"}
        height={64}
        width={64}
        alt="programing languages"
        style={{
          objectFit: "contain",
          height: "40px",
          width: "auto",
          position: "absolute",
          opacity: "0.4",
          top: useBreakpointValue({ base: "16vh", md: "20vh" }),
          left: useBreakpointValue({ base: "5vw", md: "4vw" }),
        }}
      />
      <Image
        src={"/images/binary-code.png"}
        height={64}
        width={64}
        style={{
          objectFit: "contain",
          height: "40px",
          width: "auto",
          position: "absolute",
          opacity: "0.4",
          top: useBreakpointValue({ base: "85vh", md: "65vh" }),
          left: useBreakpointValue({ base: "16vw", md: "20vw" }),
        }}
        alt="programing languages"
      />
      <VStack justify={"center"} m={{ base: 0, md: 2 }} gap={4}>
        <Heading
          ref={textRef}
          as="h1"
          w="full"
          mt={{ base: 4, md: 0 }}
          fontSize={{ base: "2.8em", md: "4em" }}
          fontWeight={600}
          color="baseLight"
          lineHeight="1.3"
          textAlign={"center"}
        >
          CODING WITH PASSION, CREATING WITH PURPOSE
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="#e8e8e8"
          lineHeight="1.7"
          w={{ base: "full", md: "60vw" }}
          textAlign={"center"}
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
            variant="outline"
            as="a"
            textDecoration="none"
            href="/#projects"
            size={"xl"}
          >
            View Portfolio
          </Button>
        </HStack>
      </VStack>

      <Image
        src={"/images/coding-language.png"}
        height={64}
        width={64}
        style={{
          objectFit: "contain",
          height: "40px",
          width: "auto",
          position: "absolute",
          opacity: "0.4",
          top: useBreakpointValue({ base: "16vh", md: "20vh" }),
          right: useBreakpointValue({ base: "5vw", md: "4vw" }),
        }}
        alt="programing languages"
      />
      <Image
        src={"/images/terminal.png"}
        height={64}
        width={64}
        style={{
          objectFit: "contain",
          height: "40px",
          width: "auto",
          position: "absolute",
          opacity: "0.4",
          top: useBreakpointValue({ base: "85vh", md: "65vh" }),
          right: useBreakpointValue({ base: "16vw", md: "20vw" }),
        }}
        alt="programing languages"
      />
    </Box>
  );
}
