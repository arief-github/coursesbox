import { useState, useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Layout } from '../components/Layout/Layout'
import { ThemeProvider } from '@emotion/react'
import { Themes } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const theme = Themes[ isDark ? "dark" : "light"];

  const toggleDark = () => setIsDark(!isDark);

  useEffect(() => {
    setIsDark(window.matchMedia("prefers-color-scheme: dark").matches);
  }, []);

  return (
    <>    
      <ThemeProvider theme={theme}>
        <Layout onThemeToggle={toggleDark} isDark={isDark}>
          <Component {...pageProps} />
        </Layout> 
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
