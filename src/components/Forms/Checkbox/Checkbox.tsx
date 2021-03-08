import React, { FC } from 'react';
import * as S from './StyledCheckbox';

export interface CheckboxProps {
    /** 접근성 */
    id: string;
    /** 라벨 On/Off */
    hideLabel?: boolean;
    /** 에러 내용 */
    error?: string;
    /** Default Check */
    defaultCheck?: boolean;
    /** Disabled */
    disabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ children, id, error, hideLabel = false, defaultCheck = false, disabled = false }) => (
    <S.CheckboxWrapper>
        <S.LabelWrapper htmlFor={id} disabled={disabled}>
            <S.CheckboxInput type="checkbox" id={id} defaultChecked={defaultCheck} disabled={disabled} />
            <S.LabelText hideLabel={hideLabel}>{children}</S.LabelText>
        </S.LabelWrapper>
        {error && <S.Error>{error}</S.Error>}
    </S.CheckboxWrapper>
);
