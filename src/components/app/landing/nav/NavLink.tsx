import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface Types {
  children: any;
  href: string;
  color: string;
  target?: string;
  rel?: string;
  isOpen?: boolean;
}

const NavLink = ({
  children,
  href,
  color,
  target,
  rel,
  isOpen,
}: Types): any => {
  const pathname = usePathname();
  const isHashLink: boolean = href.includes("#");
  const basePath: string = isHashLink ? href.split("#")[0] : href;
  const isActive: boolean = pathname === basePath && !isHashLink;

  const defaultColor: string = color || "primary";
  const hoverColor: string = "primary/50";
  const activeColor: string = "baseLight";

  return (
    <Link href={href} target={target}>
      <ChakraLink
        as="span"
        py={2}
        rel={rel}
        fontWeight="semibold"
        fontSize={"1.1em"}
        transition="color 0.15s ease-in-out"
        color={isActive ? activeColor : isOpen ? "#f8f8f8" : defaultColor}
        _hover={{
          textDecoration: "none",
          color: hoverColor,
        }}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
