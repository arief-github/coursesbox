import styled from "@emotion/styled";
import { StyledLink } from "../StyledLink";
import { Logo } from "../Logo/Logo";
import { Input } from "../Input/Input";

const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  grid-template-areas:
    "header nav"
    "search search"
    "content content"
    "footer footer";
  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 5vmin;
  }

  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-areas:
      "header  search nav"
      "content content content"
      "footer  footer footer";
  }
`;

const StyledLogo = styled(Logo)`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 4rem;
  & .logo_full {
    display: none;
  }
  @media (min-width: 560px) {
    & .logo_short {
      display: none;
    }
    & .logo_full {
      display: inline;
    }
  }
`;

const LogoLink = styled(StyledLink)`
 padding-right: 1vw;
`;

const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
`;

const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;

const Content = styled.main`
  grid-area: content;
  margin-top: 1rem;
  min-height: 84vh;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

export {
    Wrapper,
    StyledLogo,
    LogoLink,
    MainNav,
    SearchInput,
    Content,
    Footer
}