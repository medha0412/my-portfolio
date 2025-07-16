import { TbMarquee } from 'react-icons/tb'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
'screen-50': '50vh',
      },
      keyframes: {
        
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      
      fall: {
'0%': {transform: 'translateY(0)',opacity:'1'},
  '100%':{ transform: 'translateY(400px)', opacity: '0.2'}
      },
      },
      animation: {
        marquee: 'marquee 15s linear infinite ',
fall :'fall 4s linear infinite',
slideIn: 'slideIn 1s ease out'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
