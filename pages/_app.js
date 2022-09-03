import { useEffect } from "react";
import { AuthContextProvider } from "../context/AuthContext";
import { UserContextProvider } from "../context/UserContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
