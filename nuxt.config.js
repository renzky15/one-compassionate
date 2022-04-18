export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'onehomecare-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
   
    ],
    script: [
      { src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" },
      { src:"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" },
     
    ]
  
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/slick.js',
  
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    
    '@nuxtjs/google-fonts'
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'renzowensantillan@gmail.com',
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 587,
        auth: {
          user: 'd7f1a672e736ee',
          pass: 'a2a43e4c38959d'
        },
      },
    }],
  ,
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleFonts: {
    families: {
      // a simple name
      Roboto: true,
  
      // a name with spaces
      'Josefin+Sans': true,
  
      // specific font weights
      Lato: [100, 300],
    }
  },
  server: {
    port: process.env.PORT || 4002,
}
}
