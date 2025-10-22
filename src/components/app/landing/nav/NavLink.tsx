import Link from "next/link";
import { useState } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

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
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const isHashLink: boolean = href.includes("#");
  const isRootLink: boolean = href === "/";
  const basePath: string = isHashLink ? href.split("#")[0] : href;
  const isActive: boolean = pathname === basePath && !isHashLink;

  const defaultColor: string = color || "primary";
  const hoverColor: string = "primary/50";
  const activeColor: string = "baseLight";

  const updateUrl = (url: string): void => {
    window.history.pushState({}, "", url);
  };

  const scrollToTop = (): void => {
    updateUrl("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHash = (hash: any) => {
    updateUrl(hash);
    const element: Element = document.getElementById(hash.substring(1));
    if (element) {
      const offset: number =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleLinkClick = async (e: any) => {
    if (isNavigating) {
      e.preventDefault();
      return;
    }

    if (isRootLink && pathname === "/") {
      e.preventDefault();
      scrollToTop();
      return;
    }

    if (isHashLink && pathname === "/") {
      e.preventDefault();
      const [, hash] = href.split("#");
      scrollToHash(`#${hash}`);
      return;
    }

    if (isHashLink && pathname !== basePath) {
      e.preventDefault();
      setIsNavigating(true);
      router.push(basePath);

      setTimeout(() => {
        const [, hash]: any[] = href.split("#");
        scrollToHash(`#${hash}`);
        setIsNavigating(false);
      }, 100);
    }
  };

  return (
    <Link href={href} target={target} scroll={false} onClick={handleLinkClick}>
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
