import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // Laravel specific paths
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        // Additional paths for Vue components
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './index.html',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
            },
            screens: {
                '3xl': '1920px',
            },
            minHeight: {
                ...defaultTheme.spacing,
                'screen-75': '75vh',
                'screen-85': '85vh',
            },
            maxHeight: {
                ...defaultTheme.spacing,
                'screen-75': '75vh',
                'screen-85': '85vh',
            },
        },
    },

    plugins: [
        forms,
        // Tambahan plugin untuk utility classes
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],

    // Konfigurasi darkMode jika diperlukan
    darkMode: 'class',

    // Konfigurasi prefix jika diperlukan untuk menghindari konflik
    prefix: '',

    // Important modifier jika diperlukan
    important: false,

    // Optimasi untuk production
    future: {
        hoverOnlyWhenSupported: true,
        respectDefaultRingColorOpacity: true,
        disableColorOpacityUtilitiesByDefault: true,
        throwOnMultipleThemeSelectors: true,
    },
};