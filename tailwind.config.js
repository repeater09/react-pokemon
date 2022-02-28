const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        // classes that are generated dynamically, e.g. `rounded-${size}` and must
        // be kept
        safeList: [],
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
    },
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            blue: colors.blue,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {},
    },
    plugins: [],
}