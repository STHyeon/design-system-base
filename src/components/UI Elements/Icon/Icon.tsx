import React, { FC } from 'react';
import { library, IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import * as S from './StyledIcon';

library.add(fas, fab, far);

interface IconProps extends IconLookup {
    /** display 속성 선택 */
    block?: boolean;
}

/**
 * 아이콘은 FontAwesome을 이용합니다.
 * props는 접두사(fas, fab, far)와 아이콘 클래스명을 입력해주면 됩니다.
 * <a href="https://fontawesome.com/icons?d=gallery&p=2"  style="color: blue">[공식 사이트]</a>참고
 */

export const Icon: FC<IconProps> = ({ prefix, iconName, block = false, ...props }) => {
    const FontIconLookup = { prefix: prefix, iconName: iconName };
    const coffeeIconDefinition: IconDefinition = findIconDefinition(FontIconLookup);

    return <S.FontAweSomeWrapper icon={coffeeIconDefinition} block={block} {...props} />;
};
