import { FC } from 'react';
import styled from '@emotion/styled';
import { boxShadow, borderRadius } from '../styles';

type Props = {
    header: string;
}

const Section = styled.section`
    color: ${({ theme }) => theme.font.regular};
    background-color: ${({ theme }) => theme.background};
    padding: 1vmin 4vmin 4vmin;
    ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
    ${borderRadius};
`;

export const Tile: FC<Props> = ({ header, children }) => (
    <Section>
        <h2>{header}</h2>
        <p>{children}</p>
    </Section> 
) 