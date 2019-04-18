module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'tasks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/vuetify'
  ],
  plugins: [{ src: '~plugins/vue-tags-input', ssr: false }, { src: '~plugins/vue2-datepicker', ssr: false }, { src: '~plugins/local-storage', ssr: false }],
  loading: { color: '#3B8070' },
  css: ['~assets/css/vuetify.css', '~assets/css/app.css'],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,

    vendor: ['@johmun/vue-tags-input'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

