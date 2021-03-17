import styled, { css } from 'styled-components/macro';
import { ListItem } from 'components';
import { color } from 'assets/styles/common';

interface StyledProps {
    active?: boolean;
    index?: number;
}

export const PaginationWrapper = styled.ul<StyledProps>`
    display: flex;

    ${(props) =>
        css`
            li:nth-child(${props.index ? props.index + 2 : 2}) {
                span {
                    margin-left: 0;
                }
            }
        `}
`;

export const PaginationBox = styled(ListItem)<StyledProps>`
    &:first-child {
        span {
            margin-left: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
    }

    &:last-child {
        span {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

    ${(props) =>
        props.active &&
        css`
            span {
                border-color: ${color.primary};
            }
        `}
`;

export const PaginationItem = styled.span`
    display: block;
    position: relative;
    margin-left: -1px;
    padding: 6px 12px;
    border: 1px solid ${color.bright};
    color: ${color.primary};
    background: ${color.light};
    cursor: pointer;

    &:hover {
        background: ${color.bright};
    }
`;
