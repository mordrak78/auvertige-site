import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Couleurs de la charte graphique Au Vertige - Améliorées
				sage: {
					50: '#f6f7f4',   // Fond très clair
					100: '#e9ebe3',  // Fond clair
					200: '#d3d8c8',  // Bordure claire
					300: '#b4bea5',  // Texte secondaire clair
					400: '#92a082',  // Texte secondaire
					500: '#7a8a6d',  // Texte principal
					600: '#5f6e56',  // Texte principal foncé
					700: '#4c5847',  // Texte accent
					800: '#404940',  // Texte très foncé
					900: '#373e37',  // Texte maximum
				},
				cream: {
					50: '#fdfdf8',   // Fond très clair
					100: '#faf9f0',  // Fond clair
					200: '#f4f2e1',  // Bordure claire
					300: '#ebe8ce',  // Texte secondaire clair
					400: '#ddd8b8',  // Texte secondaire
					500: '#cdc6a2',  // Texte principal
					600: '#b8ad8c',  // Texte principal foncé
					700: '#9b9077',  // Texte accent
					800: '#807765',  // Texte très foncé
					900: '#696155',  // Texte maximum
				},
				// Poppy colors reserved for the flower brand element only
				poppy: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#dc2626',
					600: '#b91c1c',
					700: '#991b1b',
					800: '#7f1d1d',
					900: '#450a0a',
				},
				// Nouvelles couleurs d'accent pour enrichir la palette
				rose: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				violet: {
					50: '#f5f3ff',
					100: '#ede9fe',
					200: '#ddd6fe',
					300: '#c4b5fd',
					400: '#a78bfa',
					500: '#8b5cf6',
					600: '#7c3aed',
					700: '#6d28d9',
					800: '#5b21b6',
					900: '#4c1d95',
				},
				gold: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'dancing': ['Dancing Script', 'cursive'],
				'inter': ['Inter', 'sans-serif'],
			},
			borderRadius: {
				// Système de border-radius standardisé
				'xs': '0.25rem',    // 4px - Très petit
				'sm': '0.375rem',   // 6px - Petit
				'md': '0.5rem',     // 8px - Moyen (par défaut)
				'lg': '0.75rem',    // 12px - Grand
				'xl': '1rem',       // 16px - Très grand
				'2xl': '1.5rem',   // 24px - Extra large
				'3xl': '2rem',     // 32px - Maximum
				'full': '9999px',   // Cercle parfait
			},
			// Système de spacing cohérent
			spacing: {
				'xs': '0.25rem',   // 4px
				'sm': '0.5rem',    // 8px
				'md': '1rem',      // 16px
				'lg': '1.5rem',    // 24px
				'xl': '2rem',      // 32px
				'2xl': '3rem',     // 48px
				'3xl': '4rem',     // 64px
				'4xl': '6rem',     // 96px
				'5xl': '8rem',     // 128px
			},
			// Système de shadows standardisé
			boxShadow: {
				'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
				'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'flower': '0 10px 25px -5px rgba(220, 38, 38, 0.1), 0 10px 10px -5px rgba(220, 38, 38, 0.04)',
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.05))',
				DEFAULT: '0 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.1))',
				lg: '0 8px 16px var(--tw-shadow-color, rgba(0,0,0,0.1))',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [
		animatePlugin,
		plugin(function ({ addUtilities, theme, e }) {
			const textShadowUtilities = Object.entries(theme('textShadow') || {}).map(([key, value]) => ({
				[`.${e(`shadow-text-${key === 'DEFAULT' ? '' : key}`)}`]: { 'text-shadow': value },
			}));
			addUtilities(textShadowUtilities);
		})
	],
} satisfies Config;
