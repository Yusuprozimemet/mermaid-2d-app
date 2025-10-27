module.exports = {
  plugins: {
    // Tailwind's PostCSS plugin has been moved to a separate package.
    // Install `@tailwindcss/postcss` and PostCSS will load it via this key.
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
