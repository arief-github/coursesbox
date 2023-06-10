import { FC } from 'react';
import { Icons } from "./Icons";
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
    size?: number;
};

export type Props = {
    name: AvailableIcons;
} & WrapperProps & React.SVGProps<SVGSVGElement>;

const Wrapper = styled.div<WrapperProps>`
    color: ${({ theme }) => theme.font.regular};
    ${({ size }) => {
        const sizeInRem = `${size}rem`;
        return css`
            width: ${sizeInRem};
            height: ${sizeInRem};
        `;
    }}
`;

export const Icon: FC<Props> = ({ name, size= 2, ...rest }) => {
    const Icon = Icons[name];
    const sizeInRem = `${size}rem`;
    const sizes = { width: sizeInRem, height: sizeInRem };

    return (
        <Wrapper size={size}>
            <Icon {...sizes} {...rest} />
        </Wrapper>
    )
};
