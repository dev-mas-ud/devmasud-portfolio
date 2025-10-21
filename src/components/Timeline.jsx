import { Box, Flex, Text, VStack, HStack, Image, Span } from "@chakra-ui/react";

const Timeline = ({ items }) => {
  return (
    <VStack
      align="start"
      gap={6}
      position="relative"
      pl={6}
      _before={{
        content: '""',
        position: "absolute",
        left: "1px",
        top: 0,
        bottom: 0,
        width: "6px",
        borderRadius: "50px",
        bg: "primary/60",
      }}
    >
      {items.map((item, index) => (
        <Flex key={`skill-${index}`} position="relative">
          <Flex
            align="center"
            justify="center"
            position="absolute"
            left="-2.67rem"
            top="1.25rem"
            gap={10}
            boxSize="45px"
            bgGradient="to-r"
            p={1}
            gradientFrom="#08CB00"
            gradientTo="#253900"
            rounded="full"
            shadow="md"
          >
            {item.logo && (
              <Image
                src={item.logo}
                alt={item.company}
                borderRadius="full"
                objectFit="cover"
              />
            )}
          </Flex>

          <Box
            bgGradient="linear(to-br, gray.800, gray.900)"
            p={5}
            rounded="2xl"
            shadow="lg"
            maxW="xl"
          >
            <Text fontWeight="bold" fontSize="lg" color="white">
              {item.role}
            </Text>
            <Text fontSize="sm" color="gray.400" mb={2}>
              {item.company} • {item.date}
            </Text>
            <Text color="gray.300" fontSize="sm" mb={3}>
              {item.description}
            </Text>

            {item.skills?.length > 0 && (
              <HStack gap={2} wrap="wrap">
                {item.skills.map((skill, i) => (
                  <Span
                    key={i}
                    bg="whiteAlpha.200"
                    px={3}
                    py={1}
                    color="white"
                    borderRadius="md"
                  >
                    {skill}
                  </Span>
                ))}
              </HStack>
            )}
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default Timeline;
