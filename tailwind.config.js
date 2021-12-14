const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: {
        mode: 'all',
        content: [
            'app/resources/**/*.{js,scss}',
            'app/src/**/*.php',
            'app/views/**/*.twig',
        ],
        options: {
            safelist: ['html', 'body', 'main', 'fab', 'fas', /^hljs/],
        }
    },
    theme: {
        extend: {
            colors: {
                blue: colors.sky,
                gray: colors.slate,
                purple: colors.violet,
            },
            fontFamily: {
                merriweather: ['Merriweather', ...defaultTheme.fontFamily.serif],
                mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            textColor: {
                github: '#171515',
                twitter: '#1DA1F2'
            }
        }
    }
};
