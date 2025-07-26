/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mulish: ["Mulish", "Helvetica", "sans-serif"],
            },
        },
        container: {
            center: true,
            screens: {
                DEFAULT: "1110px",
            },
        },
    },
    plugins: [],
};
