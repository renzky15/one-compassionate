export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
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
    Anton:true,
      // a name with spaces
      'Josefin+Sans': true,
  
      // specific font weights
      Lato: [100, 300],
    }
  },
  server: {
    port: process.env.PORT || 4002,
},
publicRuntimeConfig: {
  baseURL: process.env.BASE_URL || 'https://onecompassionate.herokuapp.com/'
},
axios: {
  baseURL: 'https://onecompassionate.herokuapp.com/',
  proxy: true,
  debug: false,
  // headers : {
  //   common: {
  //     'Authorization' : 'Bearer 8cce75e7a96a81f598eb612d6f768eb56297d8a54283e07b2d3839ec52f8af7621754cd761f48ccadd30320a40ac80f8576375a597aca30c147ccb4725d96aca76997a5fdc53bf7939f2c5f07b1d6397988e549d085e55844e0da5841f03b53b8d398000df92121d5b70184cfec8901dd638aecc059a6b7e27399b3826f7ac59'
  //   }
  // }
}


}
