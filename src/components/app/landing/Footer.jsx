import { Box, Link, HStack } from "@chakra-ui/react";

export default function Footer() {
  const LEGALS = [
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <Box bg="neutralDark" py={"1rem"} px={{ base: 4, md: 8 }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HStack
          gap={{ base: 2, md: 4 }}
          justifyContent={"center"}
          wrap={"wrap"}
          w="full"
        >
          {LEGALS.map(({ label, href, target }) => (
            <Link
              key={`footer-legal-${href}`}
              color="baseLight"
              fontSize=".93em"
              href={href}
              target={target}
            >
              {label}
            </Link>
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
