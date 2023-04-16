/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      small: "0px",
      mobile: "359px",
      mobileHor: "640px",
      tablet: "767px",
      bigHor: "811",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      fontFamily: {
        robotoMono: "Roboto Mono, monospace",
        oswald: "Oswald, sans-serif",
        roboto: "Roboto, sans-serif",
        prompt: "Prompt, sans-serif"
      },
      colors: {
        verdeLeaf: '#025541',
        verdeClaroLeaf: '#029673',
        grisLeaf: '#4C4C4C',
        offWhite: '#F2F2F2',
        offBlack: '#161616',
        neonBlue: '#4AE7D9'
      },
    },
  },
  plugins: [],
};
