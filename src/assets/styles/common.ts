interface IColor {
    [colorProp: string]: string; // 인덱스 시그니처 형식
}

interface ITypo {
    size: {
        [typoProp: string]: number;
    };
    weight: {
        [typoProp: string]: number;
    };
}

// Global
export const color: IColor = {
    primary: '#0d6efd',
    secondary: '#6c757d',
    info: '#0dcaf0',

    light: '#FFFFFF',
    bright: '#dddddd',
    dark: '#212529',

    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107'
};

export const typography: ITypo = {
    weight: {
        light: 300,
        regular: 400,
        bold: 700
    },
    size: {
        small: 12,
        lightsmall: 14,
        normal: 16,
        lightbig: 20,
        big: 24
    }
};
