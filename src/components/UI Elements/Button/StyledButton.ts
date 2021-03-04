import styled from 'styled-components/macro';
import { ACTIONSIZE, ACTIONCOLOR } from 'assets/utils/Action';
import { color, typography } from 'assets/style/common';

interface StyledProps {
    appearance?: string;
    weight?: string;
    size?: string;
}

export const StyledButton = styled.button<StyledProps>`
    padding: ${(props) => (props.size === ACTIONSIZE.SMALL ? '8px 16px' : '13px 20px')};
    border-radius: 48px;
    font-weight: ${(props) => (props.weight === ACTIONSIZE.SMALL ? typography.weight.light : typography.weight.regular)};
    font-size: ${(props) => (props.size === ACTIONSIZE.SMALL ? typography.size.small : typography.size.normal)}px;

    ${(props) =>
        props.appearance === ACTIONCOLOR.PRIMARY &&
        `
        background: ${color.primary};
        color: ${color.lightest};
    `}

    ${(props) =>
        props.appearance === ACTIONCOLOR.SECONDARY &&
        `
        background: ${color.secondary};
        color: ${color.lightest};
    `}

    ${(props) =>
        props.appearance === ACTIONCOLOR.TERTIARY &&
        `
        background: ${color.tertiary};
        color: ${color.darkest};
    `}

    ${(props) =>
        props.appearance === ACTIONCOLOR.OUTLINE &&
        `
        border: 1px solid ${color.medium};
        background: ${color.lightest};
        color: ${color.dark};
    `}

    ${(props) =>
        props.appearance === ACTIONCOLOR.PRIMARY_OUTLINE &&
        `
        border: 1px solid ${color.primary};
        background: ${color.lightest};
        color: ${color.primary};
    `}

    ${(props) =>
        props.appearance === ACTIONCOLOR.SECONDARY_OUTLINE &&
        `
        border: 1px solid ${color.secondary};
        background: ${color.lightest};
        color: ${color.secondary};
    `}

    ${(props) =>
        props.disabled &&
        `
        cursor: not-allowed !important;
        opacity: 0.5;
    `}
`;
