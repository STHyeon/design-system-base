import React, { FC } from 'react';
import * as S from './StyledCheckbox';

export interface CheckboxProps {
    /** 접근성 */
    id: string;
    /** 라벨 내용 on/off */
    hideLabel?: boolean;
    /** 에러 내용 */
    error?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ children, id, hideLabel = false, error }) => (
    <S.CheckboxWrapper>
        <S.LabelWrapper htmlFor={id}>
            <input type="checkbox" id={id} />
            <S.LabelText hideLabel={hideLabel}>{children}</S.LabelText>
        </S.LabelWrapper>
        <S.Error>{error}</S.Error>
    </S.CheckboxWrapper>
);
