import React, { FC } from 'react';
import { Button, Icon } from 'components';
import * as S from './StyledDropdown';

type LinkProp = {
    title: string;
    link: string;
    /** 활성화/비활성화 */
    disabled: boolean;
};

interface DropDownProps {
    /** 리스트 항목 */
    items: LinkProp[];
    /** 드롭다운 헤더 */
    headers?: string;
}

export const Dropdown: FC<DropDownProps> = ({ items, headers, ...props }) => (
    <S.DropdownWrapper {...props}>
        <Button>
            Dropdown <Icon prefix="fas" iconName="caret-down" />
        </Button>
        <S.DropdownBox>
            {headers && <S.DropdownHeaders>{headers}</S.DropdownHeaders>}
            {items.map(({ title, link, disabled }) => (
                <S.DropdownItem key={title}>
                    <S.DropdownLink to={link} disabled={disabled}>
                        {title}
                    </S.DropdownLink>
                </S.DropdownItem>
            ))}
        </S.DropdownBox>
    </S.DropdownWrapper>
);
