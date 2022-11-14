function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`
    }
    return `rgb(var(${variableName})`
  }

}

const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        foreground: 'var(--color-text-foreground)',
        neutral: 'var(--color-text-neutral)',
        card: {
          primary: 'var(--color-text-card-primary)',
          secondary: 'var(--color-text-card-secondary)',
        },
        primary: 'var(--color-text-primary)',
        accent: 'var(--color-text-accent)',
        inverted: 'var(--color-text-inverted)',
      },
      backgroundColor: {
        base: 'var(--color-base)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
        primary: 'var(--color-primary)',
        incolor: 'var(--color-incolor)',
        card: {
          neutral: 'var(--color-card-neutral)',
          primary: 'var(--color-card-primary)',
        }
      },
      gradientColorStops: {
        hue: withOpacity('--color-hue'),
      }
    },
  },
  plugins: [],
}
