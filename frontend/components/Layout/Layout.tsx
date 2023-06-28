import React, { useState, useLayoutEffect, useEffect, FC } from 'react';
import Link from 'next/link';
import { IconButton } from '../IconButton';
import {
  Wrapper,
  LogoLink,
  Content,
  MainNav,
  StyledLogo,
  SearchInput,
  Footer
} from './components'
import { StyledLink } from '../StyledLink';

import { Themes } from '../../styles/themes';
import { ThemeProvider } from '@emotion/react';

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Layout: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  }

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    const themeExistsInStorage = Boolean(theme !== null);

    setIsDark(
      themeExistsInStorage ?
        Boolean(theme === "dark")
        : window.matchMedia("(prefers-color-scheme): dark").matches
    )
  }, []);

  const theme = Themes[isDark ? "dark" : "light"];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Link href="/" passHref>
          <LogoLink>
            <StyledLogo size={3}>
              <span className='logo_short'>C8X</span>
              <span className='logo_full'>CoursesBox</span>
            </StyledLogo>
          </LogoLink>
        </Link>
        <MainNav>
          <Link href="/all" passHref>
            <StyledLink>
              All
            </StyledLink>
          </Link>
          <Link href="/login" passHref>
            <StyledLink>
              <IconButton name='IconLogin' size={1} />
            </StyledLink>
          </Link>
          <IconButton name={!isDark ? "Moon" : "Sun"} size={1} onClick={toggleDark} />
        </MainNav>
        <SearchInput icon='Search' placeholder='Search' onChange={() => null} />
        <Content>{children}</Content>
        <Footer>
          © {new Date().getFullYear()} Arief Kurniawan. All rights reserved.
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

