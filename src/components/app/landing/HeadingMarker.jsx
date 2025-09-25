import { HStack, Separator, Span } from "@chakra-ui/react";

const HeadingMarker = ({ text, markerbg, ...props }) => {
  return (
    <HStack py={4} px={1} color="primary" {...props}>
      <Separator w={5} h={1} bg={markerbg || "primary"} />{" "}
      <Span
        fontWeight={"semibold"}
        fontSize={".9em"}
        textTransform={"uppercase"}
      >
        {text}
      </Span>
    </HStack>
  );
};

export default HeadingMarker;
