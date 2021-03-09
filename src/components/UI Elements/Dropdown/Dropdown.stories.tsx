import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Dropdown } from './Dropdown';

export default {
    title: 'UI Elements/Dropdown',
    component: Dropdown
} as Meta;

const data1 = [
    {
        title: 'a',
        link: '/',
        disabled: false
    },
    {
        title: 'a',
        link: '/',
        disabled: false
    }
];

const data2 = [
    {
        title: 'a',
        link: '/',
        disabled: true
    },
    {
        title: 'a',
        link: '/',
        disabled: true
    }
];

export const Basic: FC = () => <Dropdown items={data1}>aaa</Dropdown>;

export const Header: FC = () => (
    <Dropdown items={data1} headers="제목">
        aaa
    </Dropdown>
);

export const Disabled: FC = () => <Dropdown items={data2}>aaa</Dropdown>;
