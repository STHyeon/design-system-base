import styled, { css } from 'styled-components/macro';
import { color, typography } from 'assets/style/common';

interface StyledProps {
    hideLabel?: boolean;
}

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LabelWrapper = styled.label`
    display: flex;
    align-items: center;
    position: relative;
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
    color: ${color.negative};
`;
