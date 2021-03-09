import styled from 'styled-components/macro';
import { color } from 'assets/style/common';
import { ListItem, Link } from 'components';

interface StyledProps {
    disabled?: boolean;
}

export const DropdownWrapper = styled.div`
    position: relative;
`;

export const DropdownBox = styled.ul`
    position: absolute;
    top: 100%;
    z-index: 1000;
    min-width: 160px;
    margin: 2px 0 0;
    border: 1px solid ${color.secondary};
    background: ${color.light};
`;

export const DropdownItem = styled(ListItem)``;

export const DropdownLink = styled(Link)<StyledProps>`
    display: block;
    padding: 5px 20px;

    &:hover {
        background: ${color.bright};
    }
`;

export const DropdownHeaders = styled.li`
    padding: 5px 20px;
    color: ${color.secondary};
`;
