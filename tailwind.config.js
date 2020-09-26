module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
