/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      small: "0px",
      mobile: "359px",
      mobileHor: "640px",
      tablet: "768px",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      fontFamily: {
        firaCode: "Fira Code, monospoace",
        oswald: "Oswald, sans-serif",
        sourceSans: "Source Sans Pro, sans-serif",
      },
      colors: {
        verdeLeaf: '#025541',
        grisLeaf: '#4C4C4C',
        offWhite: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
