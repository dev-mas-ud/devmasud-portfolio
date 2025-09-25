import { Button as ChakraButton } from "@chakra-ui/react";
import { useCallback } from "react";

export function Button({ children, ...props }) {
  const handleTouchStart = useCallback((e) => {
    const target = e.currentTarget;

    target.classList.add(
      target.dataset.type === "solid" ? "bg-secondary" : "bg-subtle"
    );
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const target = e.currentTarget;

    target.classList.remove(
      target.dataset.type === "solid" ? "bg-secondary" : "bg-subtle"
    );
  }, []);

  return (
    <ChakraButton
      bg={props.variant === "solid" ? "primary" : "transparent"}
      color={props.variant === "solid" ? "neutralDark" : "baseLight"}
      variant={props.variant || "solid"}
      data-type={props.variant || "solid"}
      transition={".4s"}
      rounded="full"
      size={props.size}
      fontWeight={"600"}
      fontSize={props.fontSize || ".97em"}
      _hover={{
        backgroundColor: props.variant === "solid" ? "secondary" : "",
        color: props.variant === "solid" ? "baseLight" : "",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
