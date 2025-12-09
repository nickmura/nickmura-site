const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Libre Baskerville', 'serif'],
        secondary: ['Playfair Display', 'serif']
      }
    }
  },

  plugins: []
};

module.exports = config;
