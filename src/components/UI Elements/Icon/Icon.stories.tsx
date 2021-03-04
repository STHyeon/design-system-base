import React from 'react';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { Meta } from '@storybook/react';

import { Icon } from './Icon';

export default {
    title: 'UI Elements/Icon',
    component: Icon,
    argTypes: {
        prefix: {
            description: '접두사',
            type: { required: true },
            table: {
                type: { summary: 'string' }
            }
        },
        iconName: {
            description: '아이콘 class명',
            type: { required: true },
            table: {
                type: { summary: 'string' }
            }
        }
    }
} as Meta;

export const Basic = (args: IconLookup) => <Icon {...args} />;
Basic.args = {
    prefix: 'fas',
    iconName: 'coffee'
};

export const Inline = (args: IconLookup) => (
    <>
        This is an inline <Icon {...args} /> icon (default)
    </>
);
Inline.args = {
    prefix: 'fas',
    iconName: 'coffee'
};

export const Block = (args: IconLookup) => (
    <>
        This is a block <Icon block {...args} /> icon
    </>
);
Block.args = {
    prefix: 'fas',
    iconName: 'coffee'
};
