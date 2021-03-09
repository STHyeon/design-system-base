import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { color, typography } from 'assets/style/common';

export default {
    title: 'UI Elements/Button',
    component: Button,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'select',
                options: Object.keys(color)
            },
            table: {
                type: { summary: Object.keys(color) },
                defaultValue: { summary: 'secondary' }
            }
        },
        borderColor: {
            control: {
                type: 'select',
                options: Object.keys(color)
            },
            table: {
                type: { summary: Object.keys(color) }
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
        <Button backgroundColor="primary">Primary</Button>
        <Button backgroundColor="secondary">Secondary</Button>
        <Button backgroundColor="success">Success</Button>
        <Button backgroundColor="danger">Danger</Button>
        <Button backgroundColor="warning">Warning</Button>
        <Button backgroundColor="info">Info</Button>
        <Button backgroundColor="light">Light</Button>
        <Button backgroundColor="bright">bright</Button>
        <Button backgroundColor="dark">Dark</Button>
        <Button borderColor="dark">OutLine</Button>
    </>
);

export const Size: FC = () => (
    <>
        <Button backgroundColor="primary">Default</Button>
        <Button backgroundColor="primary" size="small">
            Small
        </Button>
    </>
);

export const Disabled: FC = () => (
    <>
        <Button backgroundColor="primary" disabled>
            Primary
        </Button>
        <Button backgroundColor="secondary" disabled>
            Secondary
        </Button>
        <Button backgroundColor="success" disabled>
            success
        </Button>
    </>
);
