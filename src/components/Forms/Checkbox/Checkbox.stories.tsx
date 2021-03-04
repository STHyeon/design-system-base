import React from 'react';
import { Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Forms/Checkbox',
    component: Checkbox,
    argTypes: {
        children: {
            description: '라벨 내용',
            type: { required: true },
            table: {
                type: { summary: 'string' }
            }
        }
    }
} as Meta;

export const Basic = (args: CheckboxProps) => <Checkbox {...args} />;
Basic.args = {
    id: 'Basic',
    children: '내용'
};

export const All = (args: CheckboxProps) => (
    <>
        <Checkbox hideLabel {...args}>
            내용
        </Checkbox>
        <Checkbox {...args}>내용</Checkbox>
        <Checkbox error="비밀번호를 수정해주세요" {...args}>
            내용
        </Checkbox>
    </>
);
All.args = {
    id: 'Basic'
};
