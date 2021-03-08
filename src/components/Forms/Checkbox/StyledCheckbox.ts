import styled, { css } from 'styled-components/macro';
import { color, typography } from 'assets/style/common';

interface StyledProps {
    hideLabel?: boolean;
    disabled?: boolean;
}

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LabelWrapper = styled.label<StyledProps>`
    display: flex;
    align-items: center;
    position: relative;

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed !important;
            opacity: 0.5;
        `}
`;

export const LabelText = styled.span<StyledProps>`
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

export const CheckboxInput = styled.input``;
