import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Select, SelectProps } from './Select';

export default {
    title: 'Forms/Select',
    component: Select
} as Meta;

export const Basic = (args: SelectProps) => <Select {...args} />;
Basic.args = {
    id: 'basic-1',
    children: '라벨'
};

export const All: FC = () => (
    <>
        <Select id="basic-2" hideLabel>
            Hide
        </Select>
        <Select id="basic-3">Basic</Select>
        <Select id="basic-4" error="비밀번호 ~~">
            Basic
        </Select>
        <Select id="basic-5" disabled>
            Disabled
        </Select>
        <Select id="basic-6" helperText="도움말">
            Helper Text
        </Select>
    </>
);

export const HideLabel: FC = () => (
    <Select id="basic-7" hideLabel>
        Hide
    </Select>
);

export const Error: FC = () => (
    <Select id="basic-8" error="비밀번호 ~~">
        Error
    </Select>
);

export const Disabled: FC = () => (
    <Select id="basic-9" disabled>
        Disabled
    </Select>
);

export const Block: FC = () => (
    <Select id="basic-10" block>
        Block Label
    </Select>
);

export const InlineBlock: FC = () => <Select id="basic-11">Inline-Block Label</Select>;

export const HelperText: FC = () => (
    <Select id="basic-12" helperText="도움말 내용 (비밀번호 8자리 이상)">
        Helper Text
    </Select>
);
