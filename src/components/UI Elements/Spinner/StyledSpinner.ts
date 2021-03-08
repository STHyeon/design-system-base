import styled from 'styled-components/macro';
import { color } from 'assets/style/common';
import { rotate } from 'assets/style/animation';

export const SpinnerWrapper = styled.div`
    width: 32px;
    height: 32px;
    border: 2px solid ${color.bright};
    border-top-color: ${color.secondary};
    border-radius: 50%;
    animation: ${rotate} 7s linear infinite;
`;
