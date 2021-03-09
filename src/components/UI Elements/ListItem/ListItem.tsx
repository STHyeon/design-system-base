import React, { FC } from 'react';
import * as S from './StyledListItem';

export const ListItem: FC = ({ children, ...props }) => <S.Item {...props}>{children}</S.Item>;
