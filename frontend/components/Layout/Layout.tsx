import React, { FC } from 'react';
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

type Props = {
  isDark: boolean;
  children: React.ReactNode;
  onThemeToggle: () => void;
}

export const Layout:FC<Props> = ({ children, onThemeToggle, isDark }) => (
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
            <IconButton name={isDark ? "Moon" : "Sun"} size={1} onClick={onThemeToggle} />
        </MainNav>
        <SearchInput icon='Search' placeholder='Search' onChange={() => null}/>
        <Content>{children}</Content>
        <Footer>
            © {new Date().getFullYear()} Arief Kurniawan. All rights reserved.
        </Footer>
    </Wrapper>
)
