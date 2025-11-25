/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#111111',   // Primary text
          gray: '#666666',    // Secondary text
          light: '#F4F4F5',   // Section backgrounds
          lime: '#CCF381',    // The specific lime green from the video
          purple: '#4834d4'   // For the 3D shape gradients
        }
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}