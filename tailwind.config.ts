import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}', 'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js',],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#0284c7",
                    "secondary": "#abc5e3",
                    "accent": "#5aaa74",
                    "neutral": "#031737",
                    "base-100": "#f5f5f4",
                    "info": "#3964ae",
                    "success": "#34d399",
                    "warning": "#e6ab00",
                    "error": "#d90029",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
} satisfies Config

