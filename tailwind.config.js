module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {},
    screens: {
      'sm': { 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px' },
    },
  },
  variants: {},
  plugins: [],
}
