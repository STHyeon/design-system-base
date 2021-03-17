import styled, { css } from 'styled-components/macro';
import { color, typography } from 'assets/styles/common';

interface StyledProps {
    backgroundColor?: string;
    borderColor?: string;
    weight?: string;
    size?: string;
}

export const StyledButton = styled.button<StyledProps>`
    padding: ${(props) => (props.size === 'small' ? '8px 16px' : '13px 20px')};
    border-radius: 48px;
    font-weight: ${(props) => props.weight && typography.weight[`${props.weight}`]};
    font-size: ${(props) => props.size && typography.size[`${props.size}`] + 'px'};
    background: ${(props) => (props.backgroundColor ? color[`${props.backgroundColor}`] : '#ffffff')};
    border: ${(props) => (props.borderColor ? color[`${props.backgroundColor}`] : '#ffffff')};


    ${(props) =>
        props.backgroundColor &&
        css`
            color: ${color.light};
        `}
    
    ${(props) =>
        (props.backgroundColor === 'warning' || props.backgroundColor === 'info' || props.backgroundColor === 'light' || props.backgroundColor === 'bright') &&
        css`
            color: ${color.dark};
        `}

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed !important;
            opacity: 0.5;
        `}

    ${(props) => {
        if (props.borderColor) {
            const lineColor = color[`${props.borderColor}`];

            return css`
                border: 1px solid ${lineColor};
                background: ${color.light};
                color: ${color.dark};
            `;
        }
    }}
`;
