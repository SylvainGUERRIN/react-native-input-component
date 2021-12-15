import { createTheme } from '@shopify/restyle'

const palette = {
    purpleLight: '#8C6FF7',
    purplePrimary: '#5A31F4',
    purpleDark: '#3F22AB',

    greenLight: '#56DCBA',
    greenPrimary: '#0ECD9D',
    greenDark: '#0A906E',

    black: '#0B0B0B',
    white: '#F0F2F3',

    red: '#8B0000',
    grey: '#8A8D90',
};


const theme = createTheme({
    colors: {
        mainBackground: palette.white,
        cardPrimaryBackground: palette.purplePrimary,
        red: '#8B0000',
        grey: '#8A8D90',
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
});

export type Theme = typeof theme;
export default theme;
