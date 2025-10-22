import { Box, Stack } from "@chakra-ui/react";
import NavLink from "./NavLink";

interface Types {
  Links: any[];
  linkUrls: any;
}

const MobileMenu = ({ Links, linkUrls }: Types) => {
  return (
    <Box pb={4} id="mobile-links">
      <Stack as="nav" gap={2} align={"flex-start"}>
        {Links.map((link: any): any => (
          <NavLink
            color="neutralDark"
            key={link}
            href={linkUrls[link]}
            target={"_parent"}
          >
            {link}
          </NavLink>
        ))}
        <NavLink
          color="neutralDark"
          rel="noopener noreferrer"
          href="https://github.com/dev-mas-ud"
          target={"_blank"}
        >
          Github
        </NavLink>
      </Stack>
    </Box>
  );
};

export default MobileMenu;
