import React, { FC } from 'react';
import * as S from './StyledLink';

export interface LinkProps {
    /** 링크 주소 */
    to: string;
    /** 밑줄 활성화 여부 */
    underline?: boolean;
}

export const Link: FC<LinkProps> = ({ children, to = '', ...props }) => (
    <S.LinkWrapper to={to} {...props}>
        {children}
    </S.LinkWrapper>
);
