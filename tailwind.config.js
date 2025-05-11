/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF5722", // כתום ראשי
        secondary: "#FF7043", // כתום בהיר
        backgroundDark: "#121212", // רקע כהה
        backgroundLight: "#FAFAFA", // רקע בהיר
        textPrimary: "#FFFFFF", // טקסט על כהה
        textSecondary: "#B0B0B0", // טקסט משני
      },
    },
  },
  plugins: [],
} 