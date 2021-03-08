import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { color, typography } from 'assets/style/common';

export default {
    title: 'UI Elements/Button',
    component: Button,
    argTypes: {
        appearance: {
            defaultValue: 'secondary',
            control: {
                type: 'select',
                options: Object.keys(color)
            },
            table: {
                type: { summary: Object.keys(color) },
                defaultValue: { summary: 'secondary' }
            }
        },
        children: {
            description: '버튼 내용',
            table: {
                type: { summary: 'Node' }
            }
        },
        disabled: {
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            }
        },
        weight: {
            defaultValue: 'regular',
            control: {
                type: 'inline-radio',
                options: Object.keys(typography.weight)
            },
            table: {
                type: { summary: Object.keys(typography.weight) },
                defaultValue: { summary: 'regular' }
            }
        },
        size: {
            defaultValue: 'normal',
            control: {
                type: 'inline-radio',
                options: Object.keys(typography.size)
            },
            table: {
                type: { summary: Object.keys(typography.size) },
                defaultValue: { summary: 'normal' }
            }
        }
    }
} as Meta;

export const Basic = (args: ButtonProps) => <Button {...args} />;
Basic.args = {
    children: 'Label'
};

export const All: FC = () => (
    <>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="success">Success</Button>
        <Button appearance="danger">Danger</Button>
        <Button appearance="warning">Warning</Button>
        <Button appearance="info">Info</Button>
        <Button appearance="light">Light</Button>
        <Button appearance="bright">bright</Button>
        <Button appearance="dark">Dark</Button>
    </>
);

export const Size: FC = () => (
    <>
        <Button appearance="primary">Default</Button>
        <Button appearance="primary" size="small">
            Small
        </Button>
    </>
);

export const Disabled: FC = () => (
    <>
        <Button appearance="primary" disabled>
            Primary
        </Button>
        <Button appearance="secondary" disabled>
            Secondary
        </Button>
        <Button appearance="success" disabled>
            success
        </Button>
    </>
);
