import { Link as Href } from 'react-router-dom';
import styled from 'styled-components/macro';

interface StyledProps {
    underline?: boolean;
}

export const LinkWrapper = styled(Href)<StyledProps>`
    text-decoration: ${(props) => (props.underline ? 'underline !important' : 'none')};
`;
