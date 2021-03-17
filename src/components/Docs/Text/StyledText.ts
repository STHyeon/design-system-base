import styled from 'styled-components/macro';
import { color, typography } from 'assets/styles/common';

interface StyledProps {
    size: string;
    weight?: string;
}

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextSize = styled.span`
    margin: 0 30px 0 0;
    color: ${color.secondary};
`;

export const TextContent = styled.p<StyledProps>`
    font-size: ${(props) => props.size && typography.size[props.size] + 'px'};
    font-weight: ${(props) => props.weight && typography.weight[props.weight]};

    & + & {
        margin: 50px 0 0;
    }
`;
