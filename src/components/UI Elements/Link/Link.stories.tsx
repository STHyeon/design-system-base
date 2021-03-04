import React from 'react';
import { Meta } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
    title: 'UI Elements/Link',
    component: Link,
    argTypes: {
        to: {
            type: { required: true }
        }
    }
} as Meta;

export const Basic = (args: LinkProps) => <Link {...args}>link text</Link>;
Basic.args = {
    to: '/'
};

export const All = (args: LinkProps) => (
    <>
        <Link {...args}>default </Link>
        <Link underline {...args}>
            underline
        </Link>
    </>
);
Basic.args = {
    to: '/'
};
