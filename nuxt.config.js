const pkg = require('./package')


module.exports = {
  mode: 'history' ,
  server: {
    port: 8080
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#409EFF' },

  css: [
    
    // '@/theme/index.scss',pla
    '@/assets/css/style.min.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // baseURL: 'http://takeshigel.ru'
  },

  env: {
    appName: 'takeshigel.ru',
    port: 8080,
    // baseURL: 'http://takeshigel.ru'
  },

  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {

    }
  }
}
