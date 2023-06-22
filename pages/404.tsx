import Link from "next/link";
import { Logo } from "../components/Logo/Logo";
import { StyledLink } from "../components/StyledLink";

import styled from "@emotion/styled"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
`;

const CustomLink = styled(StyledLink)`
    text-decoration: underline;
    font-size: 3rem;
`;

export default function Custom404() {
    return (
        <Wrapper>
            <Logo>404 - Page Not Found</Logo>
            <Link href="/" passHref>
                <CustomLink>Go Home</CustomLink>
            </Link>
        </Wrapper>
    )
}