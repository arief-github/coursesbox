import { useState, useEffect } from "react";
import type { AppProps } from "next/app"

import { Layout } from "../components/Layout/Layout"
import { ThemeProvider } from "@emotion/react"
import { Themes } from "../styles/themes"

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const theme = Themes[ isDark ? "dark" : "light"];

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    const isDark = Boolean(localStorage.getItem("theme") === "dark");

    setIsDark(window.matchMedia("prefers-color-scheme: dark").matches || isDark);
  }, []);

  return (
    <>    
      <ThemeProvider theme={theme}>
        <Layout onThemeToggle={toggleDark} isDark={isDark}>
          <Component {...pageProps}/>
        </Layout> 
      </ThemeProvider>
    </>
  ); 
}

export default MyApp
