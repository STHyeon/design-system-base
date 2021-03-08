import styled, { css } from 'styled-components/macro';
import { color, typography } from 'assets/style/common';

interface StyledProps {
    appearance?: string;
    weight?: string;
    size?: string;
}

export const StyledButton = styled.button<StyledProps>`
    padding: ${(props) => (props.size === 'small' ? '8px 16px' : '13px 20px')};
    border-radius: 48px;
    font-weight: ${(props) => props.weight && typography.weight[`${props.weight}`]};
    font-size: ${(props) => props.size && typography.size[`${props.size}`] + 'px'};
    background: ${(props) => (props.appearance ? color[`${props.appearance}`] : '#ffffff')};

    ${(props) =>
        props.appearance &&
        css`
            color: ${color.light};
        `}
    
    ${(props) =>
        (props.appearance === 'warning' || props.appearance === 'info' || props.appearance === 'light' || props.appearance === 'bright') &&
        css`
            color: ${color.dark};
        `}

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed !important;
            opacity: 0.5;
        `}
`;
