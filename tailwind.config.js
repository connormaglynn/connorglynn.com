module.exports = {
  content: ['./src/**/*.tsx',],
  theme: {
    extend: {
      colors: {
        'accent-1': '#999',
        'accent-2': '#277822',
        'accent-3': '#85ff00',
      },
      backgroundImage: {
        'hero-image': 'url(/logo-main.png)',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        mono: ['Roboto'],
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
