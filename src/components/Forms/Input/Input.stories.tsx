import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
    title: 'Forms/Input',
    component: Input
} as Meta;

export const Basic = (args: InputProps) => <Input {...args} />;
Basic.args = {
    id: 'basic-1',
    children: '라벨'
};

export const All: FC = () => (
    <>
        <Input id="basic-2" hideLabel>
            Hide
        </Input>
        <Input id="basic-3">Basic</Input>
        <Input id="basic-4" error="비밀번호 ~~">
            Basic
        </Input>
        <Input id="basic-5" disabled>
            Disabled
        </Input>
        <Input id="basic-6" helperText="도움말">
            Helper Text
        </Input>
    </>
);

export const HideLabel: FC = () => (
    <Input id="basic-7" hideLabel>
        Hide
    </Input>
);

export const Error: FC = () => (
    <Input id="basic-8" error="비밀번호 ~~">
        Error
    </Input>
);

export const Disabled: FC = () => (
    <Input id="basic-9" disabled>
        Disabled
    </Input>
);

export const Block: FC = () => (
    <Input id="basic-10" block>
        Block Label
    </Input>
);

export const InlineBlock: FC = () => <Input id="basic-11">Inline-Block Label</Input>;

export const HelperText: FC = () => (
    <Input id="basic-12" helperText="도움말 내용 (비밀번호 8자리 이상)">
        Helper Text
    </Input>
);
