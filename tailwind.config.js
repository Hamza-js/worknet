module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",  // or adjust the path to your components
    ],
    theme: {
        extend: {
            screens: {
                xl: '1500px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/postcss'),
    ],
}
