import React, { FC } from 'react';
import * as S from './StyledText';
import { typography } from 'assets/styles/common';

interface TextProps {
    /** 필수값 x */
    size: string;
    /** 필수값 x */
    weight: string;
    /** 신경 x */
    type?: boolean;
}

/**
 * 폰트 크기와 두께만 참고해주세요.(컴포넌트는 임시입니다.)
 */

export const Text: FC<TextProps> = ({ size, weight, type }) => (
    <S.TextContent size={size} weight={weight}>
        <S.TextSize>
            {type ? (
                <>
                    {weight}, {typography.weight[weight]}
                </>
            ) : (
                <>
                    {size}, {typography.size[size]}px
                </>
            )}
        </S.TextSize>
        Was he a beast if music could move him so?
    </S.TextContent>
);
