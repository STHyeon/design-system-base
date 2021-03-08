import React, { FC } from 'react';
import * as S from './StyledInput';

export interface InputProps {
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
    /** PlaceHolder Text */
    placeHolder?: string;
}

export const Input: FC<InputProps> = ({ children, id, error, helperText, placeHolder, hideLabel = false, disabled = false, block = false }) => (
    <S.InputWrapper disabled={disabled}>
        <S.LabelText htmlFor={id} hideLabel={hideLabel} block={block}>
            {children}
        </S.LabelText>
        <S.TextInput type="text" id={id} disabled={disabled} error={error} placeholder={placeHolder} />
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
        {error && <S.Error>{error}</S.Error>}
    </S.InputWrapper>
);
