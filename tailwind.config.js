module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': '#E8DF99',
        'secondary': '#6FA2A6',
        'light-brown': '#DEDCD8',
        'light-blue': '#c4e3e6',
        'light-white':'#fafbfb'
      },
      screens: {
        'mobile': '360px',
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      
    },
  },
  variants: {
    extend: { display: ['hover', 'focus', 'group-hover'],},
  },
  plugins: [],
}
