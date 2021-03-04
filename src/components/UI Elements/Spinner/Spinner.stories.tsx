import React from 'react';
import { Meta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
    title: 'UI Elements/Spinner',
    component: Spinner
} as Meta;

export const Basic = () => <Spinner />;
