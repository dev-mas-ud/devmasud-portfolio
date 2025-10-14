import { Box, Link, HStack } from "@chakra-ui/react";

export default function Footer() {
  const LEGALS = [
    { label: "Projects", href: "/#projects" },
    { label: "About Me", href: "/#about-me" },
  ];

  return (
    <Box
      bg="neutralDark"
      minW="100vw"
      minH="60px"
      maxH="60px"
      display={"flex"}
      alignItems={"center"}
      overflow={"hidden"}
      py="1rem"
      px={{ base: 4, md: 8 }}
    >
      <HStack
        gap={{ base: 2, md: 4 }}
        justifyContent="center"
        wrap="wrap"
        minW="100%"
      >
        {LEGALS.map(({ label, href, target }) => (
          <Link
            key={`footer-legal-${href}`}
            color="baseLight"
            fontSize=".93em"
            href={href}
            target={target}
            whiteSpace="nowrap"
          >
            {label}
          </Link>
        ))}
      </HStack>
    </Box>
  );
}
