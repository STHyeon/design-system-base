import { addons } from '@storybook/addons';

addons.setConfig({
    previewTabs: {
        canvas: {
            //hide storybooks Canvas tab
            hidden: true
        },
        'CUSTOM_PAGE_ADDON/canvas': {
            //place our custom Canvas page first in order of tabs
            index: 0
        }
    }
});
