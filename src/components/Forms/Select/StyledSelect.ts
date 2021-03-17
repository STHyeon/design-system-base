import styled, { css } from 'styled-components/macro';
import { color, typography } from 'assets/styles/common';

interface StyledProps {
    hideLabel?: boolean;
    disabled?: boolean;
    block?: boolean;
    error?: string;
}

export const SelectWrapper = styled.div<StyledProps>`
    position: relative;

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed !important;
            opacity: 0.5;

            label,
            select {
                cursor: not-allowed !important;
            }
        `}
`;

export const TextSelect = styled.select<StyledProps>`
    border: ${(props) => (props.error ? `1px solid ${color.danger}` : `1px solid ${color.dark}`)};
`;

export const LabelText = styled.label<StyledProps>`
    display: ${(props) => (props.block ? 'block' : 'inline-block')};
    vertical-align: middle;
    margin: ${(props) => (props.block ? '0 0 8px' : '0 5px 0 0')};

    ${(props) =>
        props.hideLabel &&
        css`
            visibility: hidden;
            overflow: hidden;
            position: absolute;
            left: 0;
            top: 0;
            width: 1px;
            height: 1px;
            margin: 0;
            padding: 0;
            font-size: 0;
            line-height: 0;
        `}
`;

export const Error = styled.span`
    margin: 0 0 0 6px;
    font-size: ${typography.size.small}px;
    color: ${color.danger};
`;

export const HelperText = styled.p`
    margin: 5px 0 10px;
    color: ${color.secondary};
`;
