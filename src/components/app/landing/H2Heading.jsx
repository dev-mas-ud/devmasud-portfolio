import { Heading } from "@chakra-ui/react";
import useTextSplit from "hooks/useTextSplit";
import { useRef } from "react";

export default function H2Heading({
  fontSize = { base: "2.5em", md: "3em" },
  fontWeight = "600",
  children,
  ...props
}) {
  const textRef = useRef(null);
  useTextSplit(textRef);

  return (
    <Heading
      ref={textRef}
      as="h2"
      mt={-5}
      mb={props.mb || 12}
      fontSize={fontSize}
      textAlign={"left"}
      color={"neutralDaserk"}
      lineHeight={{ base: 1.3, md: 1.5 }}
      {...props}
    >
      {children}
    </Heading>
  );
}
