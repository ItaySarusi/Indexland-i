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
        primary: {
          DEFAULT: "#FF5722", // כתום ראשי
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF5722", // כתום ראשי
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
          950: "#9F2F00",
        },
        secondary: {
          DEFAULT: "#FF7043", // כתום בהיר
          50: "#FBE9E7",
          100: "#FFCCBC",
          200: "#FFAB91",
          300: "#FF8A65",
          400: "#FF7043", // כתום בהיר
          500: "#FF5722",
          600: "#F4511E",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
          950: "#9F2F00",
        },
        backgroundDark: {
          DEFAULT: "#121212", // רקע כהה
          50: "#484848",
          100: "#3D3D3D",
          200: "#333333",
          300: "#292929",
          400: "#1E1E1E",
          500: "#121212", // רקע כהה
          600: "#0A0A0A",
          700: "#070707",
          800: "#050505",
          900: "#030303",
          950: "#000000",
        },
        backgroundLight: {
          DEFAULT: "#FAFAFA", // רקע בהיר
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FEFEFE",
          500: "#FAFAFA", // רקע בהיר
          600: "#E0E0E0",
          700: "#C7C7C7",
          800: "#ADADAD",
          900: "#949494",
          950: "#878787",
        },
        textPrimary: {
          DEFAULT: "#FFFFFF", // טקסט על כהה
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFFFFF", // טקסט על כהה
          600: "#E0E0E0",
          700: "#C2C2C2",
          800: "#A3A3A3",
          900: "#858585",
          950: "#757575",
        },
        textSecondary: {
          DEFAULT: "#B0B0B0", // טקסט משני
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#CCCCCC",
          400: "#B0B0B0", // טקסט משני
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          950: "#121212",
        },
      },
      // RTL Support
      spacing: {
        'rtl-safe': '0.5rem',
      },
      fontFamily: {
        'hebrew': ['Segoe UI', 'Arial', 'Helvetica', 'sans-serif'],
        'english': ['Inter', 'Urbanist', 'Helvetica Now', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // RTL Plugin would go here if available
    // require('tailwindcss-rtl'),
  ],
} 