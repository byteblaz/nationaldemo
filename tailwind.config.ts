import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem'
      }
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
        'border-spin': 'border-spin 1s linear infinite',
        rainbow: 'rainbow var(--speed, 2s) infinite linear',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'background-position-spin': 'background-position-spin 3000ms infinite alternate',
        gradient: 'gradient 8s linear infinite',
        'gradient-auto': 'gradient-auto 8s ease infinite' // New gradient animation
      },
      keyframes: {
        'ping-large': {
          '75%,100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          }
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        },
        'move-right': {
          '0%': {
            transform: 'translateX(-50%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        rainbow: {
          '0%': {
            'background-position': '0%'
          },
          '100%': {
            'background-position': '200%'
          }
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        },
        'gradient-text': {
          '0%': {
            'background-position': '0% 50%'
          },
          '100%': {
            'background-position': '100% 50%'
          }
        },
        'background-position-spin': {
          '0%': {
            backgroundPosition: 'top center'
          },
          '100%': {
            backgroundPosition: 'bottom center'
          }
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0'
          }
        },
        'gradient-auto': { // New gradient animation for smooth, continuous color transition
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
