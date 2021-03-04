import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components/macro';

interface StyledProps {
    block?: boolean;
}

export const FontAweSomeWrapper = styled(FontAwesomeIcon)<StyledProps>`
    display: ${(props) => (props.block ? 'block' : 'inline-block')};
`;
