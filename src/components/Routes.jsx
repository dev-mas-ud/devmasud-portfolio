import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FullPageLoader } from "./Loader";

export const PublicRoute = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState("checking");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    setAuthState(userId ? "authenticated" : "unauthenticated");

    if (userId) {
      router.replace("/user/dashboard");
    }
  }, [router]);

  if (authState === "checking") {
    return <FullPageLoader />;
  }

  return authState === "unauthenticated" ? <>{children}</> : <FullPageLoader />;
};

export const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [authState, setAuthState] = useState("checking");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    setAuthState(userId ? "authenticated" : "unauthenticated");

    if (!userId) {
      router.replace("/auth/login");
    }
  }, [router]);

  if (authState === "checking") {
    return <FullPageLoader />;
  }

  return authState === "authenticated" ? <>{children}</> : <FullPageLoader />;
};
