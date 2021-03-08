import React, { FC } from 'react';
import * as S from './StyledSelect';

export interface SelectProps {
    /** 접근성 */
    id: string;
    /** 라벨 On/Off */
    hideLabel?: boolean;
    /** 에러 내용 */
    error?: string;
    /** Disabled */
    disabled?: boolean;
    /** Block */
    block?: boolean;
    /** Helper Text */
    helperText?: string;
}

export const Select: FC<SelectProps> = ({ children, id, error, helperText, hideLabel = false, disabled = false, block = false }) => (
    <S.SelectWrapper disabled={disabled}>
        <S.LabelText htmlFor={id} hideLabel={hideLabel} block={block}>
            {children}
        </S.LabelText>
        <S.TextSelect id={id} disabled={disabled} error={error}>
            <option>1</option>
        </S.TextSelect>
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
        {error && <S.Error>{error}</S.Error>}
    </S.SelectWrapper>
);
