import React, { FC } from 'react';
import * as S from './StyledRadio';

export interface RadioProps {
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

export const Radio: FC<RadioProps> = ({ children, id, error, hideLabel = false, defaultCheck = false, disabled = false }) => (
    <S.RadioWrapper>
        <S.LabelWrapper htmlFor={id} disabled={disabled}>
            <S.RadioInput type="radio" id={id} defaultChecked={defaultCheck} disabled={disabled} />
            <S.LabelText hideLabel={hideLabel}>{children}</S.LabelText>
        </S.LabelWrapper>
        {error && <S.Error>{error}</S.Error>}
    </S.RadioWrapper>
);
