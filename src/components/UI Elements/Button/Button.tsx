import React, { FC } from 'react';
import { ACTIONCOLOR } from 'assets/utils/Action';
import * as S from './StyledButton';

type ValueOf<T> = T[keyof T];

export type ButtonProps = {
    /** 활성화/비활성화 */
    disabled?: boolean;
    /** 각종 색상 */
    appearance?: ValueOf<typeof ACTIONCOLOR>;
    /** 각종 크기관련 */
    size?: string;
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <S.StyledButton type="button" {...props}>
        {children}
    </S.StyledButton>
);
