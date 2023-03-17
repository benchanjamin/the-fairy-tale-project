/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                '3xl': '2000px',
            },
            colors: {
                lightBlack: '#1d1d1d',
                lightBlue: '#5ce1e6',
                darkBlue: '#20c5cb'
            },
            fontFamily: {
                sans: ['Playfair Display', 'sans-serif'],
                serif: ['Lato', 'sans-serif'],
                freight: ["freight-text-pro"],
                eb_garamond: ["EB Garamond"],
            },
        },
    },
    plugins: [],
};
