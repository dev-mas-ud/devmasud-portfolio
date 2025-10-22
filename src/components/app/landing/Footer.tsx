import { Flex, HStack, Link } from "@chakra-ui/react";
import { Github, Linkedin, TwitterX } from "react-bootstrap-icons";

export default function Footer() {
  const SOCIAL_ICONS: any[] = [
    {
      icon: <TwitterX size={20} color="#ccc" />,
      href: "https://x.com/DevMasud",
      label: "Follow me on X",
      title: "@DevMasud",
    },
    {
      icon: <Linkedin size={20} color="#ccc" />,
      href: "https://www.linkedin.com/in/dev-masud/",
      label: "Follow me on LinkedIn",
      title: "dev-masud",
    },
    {
      icon: <Github size={20} color="#ccc" />,
      href: "https://github.com/dev-mas-ud/",
      label: "Follow me on Github",
      title: "dev-mas-ud",
    },
  ];

  return (
    <Flex
      bg="neutralDark"
      minW="100vw"
      minH="60px"
      maxH="60px"
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      py="1rem"
      px={{ base: 4, md: 8 }}
    >
      <HStack gap={{ base: 5, md: 6 }}>
        {SOCIAL_ICONS.map(({ href, label, title, icon }) => (
          <Link
            key={`footer-social-icon-${label}`}
            href={label === "Send a mail" ? `mailto:${href}` : href}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
