import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Textarea, TextareaProps } from './Textarea';

export default {
    title: 'Forms/Textarea',
    component: Textarea
} as Meta;

export const Basic = (args: TextareaProps) => <Textarea {...args} />;
Basic.args = {
    id: 'basic-1',
    children: '라벨'
};

export const All: FC = () => (
    <>
        <Textarea id="basic-2" hideLabel>
            Hide
        </Textarea>
        <Textarea id="basic-3">Basic</Textarea>
        <Textarea id="basic-4" error="비밀번호 ~~">
            Basic
        </Textarea>
        <Textarea id="basic-5" disabled>
            Disabled
        </Textarea>
        <Textarea id="basic-6" helperText="도움말">
            Helper Text
        </Textarea>
    </>
);

export const HideLabel: FC = () => (
    <Textarea id="basic-7" hideLabel>
        Hide
    </Textarea>
);

export const Error: FC = () => (
    <Textarea id="basic-8" error="비밀번호 ~~">
        Error
    </Textarea>
);

export const Disabled: FC = () => (
    <Textarea id="basic-9" disabled>
        Disabled
    </Textarea>
);

export const HelperText: FC = () => (
    <Textarea id="basic-10" helperText="도움말 내용 (비밀번호 8자리 이상)">
        Helper Text
    </Textarea>
);
