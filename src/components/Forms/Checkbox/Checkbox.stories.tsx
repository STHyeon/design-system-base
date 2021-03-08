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
    id: 'Basic-1',
    children: '내용'
};

export const All = () => (
    <>
        <Checkbox id="basic-2" hideLabel>
            내용
        </Checkbox>
        <Checkbox id="basic-3" defaultCheck>
            내용
        </Checkbox>
        <Checkbox id="basic-4" error="비밀번호를 수정해주세요">
            내용
        </Checkbox>
        <Checkbox id="basic-5" disabled>
            내용
        </Checkbox>
    </>
);

export const HideLabel = () => (
    <Checkbox id="basic-8" hideLabel>
        내용
    </Checkbox>
);

export const ErrorMessage = () => (
    <Checkbox id="basic-9" error="비밀번호를 수정해주세요">
        내용
    </Checkbox>
);

export const CheckedInput = () => (
    <Checkbox id="basic-6" defaultCheck>
        내용
    </Checkbox>
);

export const DisabledInput = () => (
    <Checkbox id="basic-7" disabled>
        내용
    </Checkbox>
);
