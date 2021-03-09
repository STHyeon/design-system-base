import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { ListItem } from './ListItem';

export default {
    title: 'UI Elements/ListItem',
    component: ListItem
} as Meta;

export const Basic: FC = () => <ListItem />;
