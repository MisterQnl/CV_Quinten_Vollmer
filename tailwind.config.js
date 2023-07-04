/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    '0%': {transform: 'rotate(0.0deg)'},
                    '10%': {transform: 'rotate(14deg)'},
                    '20%': {transform: 'rotate(-8deg)'},
                    '30%': {transform: 'rotate(14deg)'},
                    '40%': {transform: 'rotate(-4deg)'},
                    '50%': {transform: 'rotate(10.0deg)'},
                    '60%': {transform: 'rotate(0.0deg)'},
                    '100%': {transform: 'rotate(0.0deg)'},
                },
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-15deg)'},
                    '50%': {transform: 'rotate(15deg)'},
                }
            },
            animation: {
                'waving-hand': 'wave 2s linear infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-animated'),
    ],
}

