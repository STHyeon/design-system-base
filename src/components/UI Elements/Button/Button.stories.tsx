import React, { FC } from 'react';
import { Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { ACTIONCOLOR, ACTIONBOOLEAN, ACTIONSIZE } from 'assets/utils/Action';

export default {
    title: 'UI Elements/Button',
    component: Button,
    argTypes: {
        appearance: {
            defaultValue: ACTIONCOLOR.TERTIARY,
            control: {
                type: 'select',
                options: Object.values(ACTIONCOLOR)
            },
            table: {
                type: { summary: Object.values(ACTIONCOLOR) },
                defaultValue: { summary: ACTIONCOLOR.TERTIARY }
            }
        },
        children: {
            description: '버튼 내용',
            table: {
                type: { summary: 'Node' }
            }
        },
        disabled: {
            defaultValue: ACTIONBOOLEAN.FALSE,
            table: {
                defaultValue: { summary: ACTIONBOOLEAN.FALSE }
            }
        },
        size: {
            defaultValue: ACTIONSIZE.NORMAL,
            control: {
                type: 'inline-radio',
                options: [ACTIONSIZE.SMALL, ACTIONSIZE.NORMAL]
            },
            table: {
                type: { summary: [ACTIONSIZE.SMALL, ACTIONSIZE.NORMAL] },
                defaultValue: { summary: ACTIONSIZE.NORMAL }
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
        <Button appearance="tertiary">Tertiary</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="primaryOutline">Outline primary</Button>
        <Button appearance="secondaryOutline">Outline secondary</Button>
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
        <Button appearance="tertiary" disabled>
            Tertiary
        </Button>
        <Button appearance="outline" disabled>
            Outline
        </Button>
    </>
);
