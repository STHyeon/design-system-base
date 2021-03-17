import React, { FC } from 'react';
import * as S from './StyledButton';
import { color } from 'assets/styles/common';

type ValueOf<T> = T[keyof T];

export type ButtonProps = {
    /** 활성화/비활성화 */
    disabled?: boolean;
    /** 각종 배경 색상 */
    backgroundColor?: ValueOf<typeof color>;
    /** 각종 선 색상 */
    borderColor?: ValueOf<typeof color>;
    /** 각종 크기관련 */
    size?: string;
};

export const Button: FC<ButtonProps> = ({ children, backgroundColor = 'secondary', ...props }) => (
    <S.StyledButton type="button" backgroundColor={backgroundColor} {...props}>
        {children}
    </S.StyledButton>
);
