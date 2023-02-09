
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "lMobile": "375px",
        "bMobile": "479px",
        "tablet": "767px",
        "laptop": "1023px",
        "desktop": "1200px"
      },
    },
  },
  plugins: [],
}
