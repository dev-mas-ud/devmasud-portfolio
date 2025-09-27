import { Box, Card } from "@chakra-ui/react";
import Image from "next/image";
import { useCallback } from "react";

export default function FeatureCard({
  icon,
  title,
  description,
  imgUrl,
  ...props
}) {
  const handleTouchStart = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.add("translate-y");
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.remove("translate-y");
  }, []);

  return (
    <Card.Root
      bg="baseLight"
      transition="all 0.4s"
      _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
      rounded="3xl"
      border={"none"}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      <Card.Body gap={2} justifyContent={"flex-start"} alignItems={"center"}>
        <Box bg="secondary" rounded="full" p={4} mt={1}>
          {icon}
        </Box>
        <Card.Title
          color="neutralDark"
          mt={3}
          fontSize={"1.5em"}
          textAlign={"center"}
        >
          {title}
        </Card.Title>
        <Card.Description
          textAlign={"left"}
          fontSize={"md"}
          color={"gray.600"}
          lineHeight={"1.9"}
          mt={2}
          lineClamp={{ md: 8 }}
        >
          {description}
        </Card.Description>
        {imgUrl && (
          <Box
            position="relative"
            overflow="hidden"
            width={"full"}
            mt={2}
            maxH="200px"
            minHeight="200px"
          >
            <Image
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
              priority
              fill
              sizes="100%"
              src={imgUrl}
              alt={title}
            />
          </Box>
        )}
      </Card.Body>
    </Card.Root>
  );
}
