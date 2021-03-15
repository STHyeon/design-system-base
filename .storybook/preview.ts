import { addDecorator } from '@storybook/react';
import routerDecorator from './router-decorator';
import '../src/assets/style/reset.scss';

addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs'
};
