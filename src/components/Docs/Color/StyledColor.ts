import styled, { css } from 'styled-components/macro';
import { color } from 'assets/styles/common';

interface StyledProps {
    appearance?: string;
}

export const ColorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ColorBox = styled.div<StyledProps>`
    width: calc(100% / 3 - 10px);
    margin: 5px;
    padding: 16px;
    color: ${color.light};
    background: ${(props) => props.appearance && color[props.appearance]};

    ${(props) =>
        (props.appearance === 'warning' || props.appearance === 'info' || props.appearance === 'light' || props.appearance === 'bright') &&
        css`
            color: ${color.dark};
        `}
`;
