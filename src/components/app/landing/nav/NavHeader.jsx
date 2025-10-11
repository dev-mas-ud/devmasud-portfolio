import {
  Box,
  Flex,
  IconButton,
  CloseButton,
  Drawer,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import DesktopLinks from "./DesktopLinks";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Brand from "../../Brand";

export default function NavHeader() {
  return (
    <Box
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        position: "-webkit-sticky",
      }}
      pos="sticky"
      px={{ base: 6, md: 16, xl: 28 }}
      py={6}
      top={0}
      left={0}
      zIndex={1000}
    >
      <Flex align="center" justify="space-between">
        <Brand />
        <NavLinks />
      </Flex>
    </Box>
  );
}

export function NavLinks() {
  const { isOpen, onClose } = useDisclosure();

  const Links = ["Home", "About Me", "Projects", "Blog", "Contact"];
  const linkUrls = {
    Home: "/",
    "About Me": "/#about-me",
    Projects: "/#projects",
    Blog: "/blog",
    Contact: "/#contact",
  };

  return (
    <Box>
      <DesktopLinks Links={Links} linkUrls={linkUrls} />
      <Drawer.Root isOpen={isOpen} placement="top" onClose={onClose}>
        <Drawer.Trigger id="menu-trigger" asChild display={"flex"}>
          <IconButton
            size="sm"
            bg="primary"
            h="8"
            color="#000000"
            variant="surface"
            aria-label="Open Menu"
          >
            <FaBars />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header bg="neutralDark" py={7}>
                <Brand />
              </Drawer.Header>
              <Drawer.Body bg="primary">
                <MobileMenu Links={Links} linkUrls={linkUrls} />
              </Drawer.Body>
              <Drawer.CloseTrigger asChild right={5}>
                <CloseButton
                  size="sm"
                  bg="primary"
                  color="#000000"
                  mt={2.5}
                  variant="surface"
                  aria-label="Close Menu"
                >
                  <FaX size={40} />
                </CloseButton>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
