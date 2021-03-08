import React, { FC } from 'react';
import * as S from './StyledTextarea';

export interface TextareaProps {
    /** 접근성 */
    id: string;
    /** 라벨 On/Off */
    hideLabel?: boolean;
    /** 에러 내용 */
    error?: string;
    /** Disabled */
    disabled?: boolean;
    /** Helper Text */
    helperText?: string;
    /** PlaceHolder Text */
    placeHolder?: string;
}

export const Textarea: FC<TextareaProps> = ({ children, id, error, helperText, placeHolder, hideLabel = false, disabled = false }) => (
    <S.TextareaWrapper disabled={disabled}>
        <S.LabelText htmlFor={id} hideLabel={hideLabel}>
            {children}
        </S.LabelText>
        <S.TextTextarea id={id} disabled={disabled} error={error} placeholder={placeHolder} />
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
        {error && <S.Error>{error}</S.Error>}
    </S.TextareaWrapper>
);
