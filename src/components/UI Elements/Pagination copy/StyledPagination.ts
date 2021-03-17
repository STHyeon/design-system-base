import styled from 'styled-components/macro';
import { ListItem, Link } from 'components';
import { color } from 'assets/styles/common';

export const BreadcrumbsWrapper = styled.ol`
    display: flex;
    position: relative;
    padding: 8px 15px;
`;

export const BreadcrumbsItem = styled(ListItem)`
    a {
        color: ${color.primary};
    }

    &:last-child {
        a {
            color: ${color.secondary};
            cursor: default;
        }
    }

    & + & {
        &::before {
            padding: 0 5px;
            color: ${color.bright};
            content: '/';
        }
    }
`;

export const BreadcrumbsLink = styled(Link)``;
