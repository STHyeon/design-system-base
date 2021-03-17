import styled from 'styled-components/macro';
import { color, typography } from 'assets/styles/common';

export const ProgressBarWrapper = styled.div`
    overflow: hidden;
    height: 20px;
    border-radius: 4px;
    background: ${color.bright};
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Bar = styled.span`
    display: inline-block;
    min-width: 30px;
    height: 100%;
    font-size: ${typography.size.small}px;
    line-height: 20px;
    text-align: center;
    color: ${color.light};
    background: ${color.primary};
`;
