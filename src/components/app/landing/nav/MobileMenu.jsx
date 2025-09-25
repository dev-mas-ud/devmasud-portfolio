import { Box, Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";

const MobileMenu = ({ Links, linkUrls }) => {
  return (
    <Box pb={4} id="mobile-links">
      <Stack as="nav" gap={2} align={"flex-start"}>
        {Links.map((link) => (
          <NavLink
            color="neutralDark"
            key={link}
            href={linkUrls[link]}
            target={link === "Blog" ? "_blank" : "_parent"}
          >
            {link}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
};

export default MobileMenu;
