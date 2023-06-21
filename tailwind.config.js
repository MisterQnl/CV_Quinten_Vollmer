/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            colors: {
                blue: {
                    950: '#948E99',
                    1000: '#2E1437',
                }
            }
        },
    },
    plugins: [],
}

