import React from 'react';
import { Meta } from '@storybook/react';
import { Radio, RadioProps } from './Radio';

export default {
    title: 'Forms/Radio',
    component: Radio,
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

export const Basic = (args: RadioProps) => <Radio {...args} />;
Basic.args = {
    id: 'Basic-1',
    children: '내용'
};

export const All = () => (
    <>
        <Radio id="basic-2" hideLabel>
            내용
        </Radio>
        <Radio id="basic-3" defaultCheck>
            내용
        </Radio>
        <Radio id="basic-4" error="비밀번호를 수정해주세요">
            내용
        </Radio>
        <Radio id="basic-5" disabled>
            내용
        </Radio>
    </>
);

export const HideLabel = () => (
    <Radio id="basic-8" hideLabel>
        내용
    </Radio>
);

export const ErrorMessage = () => (
    <Radio id="basic-9" error="비밀번호를 수정해주세요">
        내용
    </Radio>
);

export const CheckedInput = () => (
    <Radio id="basic-6" defaultCheck>
        내용
    </Radio>
);

export const DisabledInput = () => (
    <Radio id="basic-7" disabled>
        내용
    </Radio>
);
