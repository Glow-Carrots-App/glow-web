import { useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  if (router.asPath == "/sign-in" || router.asPath == "/create-account") {
    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  }
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
