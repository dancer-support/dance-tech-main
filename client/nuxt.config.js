import colors from 'vuetify/es5/util/colors'
import { getConfigForKeys } from './lib/config'

const config = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'VUE_APP_FIREBASE_API_KEY',
  'VUE_APP_FIREBASE_AUTH_DOMAIN',
  'VUE_APP_FIREBASE_DATABASE_URL',
  'VUE_APP_FIREBASE_PROJECT_ID',
  'VUE_APP_FIREBASE_STORAGE_BUCKET',
  'VUE_APP_FIREBASE_MESSAGING_SENDER_ID',
  'VUE_APP_FIREBASE_APP_ID',
  'VUE_APP_FIREBASE_MEASUREMENT_ID'
])

export default {
  // Target (https://go.nuxtjs.dev/config-target)

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - dance tech',
    title: 'dance tech',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/profile.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-masonry-css.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: config.VUE_APP_FIREBASE_API_KEY,
      authDomain: config.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: config.VUE_APP_FIREBASE_DATABASE_URL,
      projectId: config.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: config.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: config.VUE_APP_FIREBASE_APP_ID,
      measurementId: config.VUE_APP_FIREBASE_MEASUREMENT_ID
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged'
        },
        ssr: true
        // emulatorPort: 9099,
        // emulatorHost: 'https://localhost'
      },
      performance: true,
      analytics: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    VUE_APP_FIREBASE_API_KEY: config.VUE_APP_FIREBASE_API_KEY,
    VUE_APP_FIREBASE_AUTH_DOMAIN: config.VUE_APP_FIREBASE_AUTH_DOMAIN,
    VUE_APP_FIREBASE_DATABASE_URL: config.VUE_APP_FIREBASE_DATABASE_URL,
    VUE_APP_FIREBASE_PROJECT_ID: config.VUE_APP_FIREBASE_PROJECT_ID,
    VUE_APP_FIREBASE_STORAGE_BUCKET: config.VUE_APP_FIREBASE_STORAGE_BUCKET,
    VUE_APP_FIREBASE_MESSAGING_SENDER_ID:
      config.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    VUE_APP_FIREBASE_APP_ID: config.VUE_APP_FIREBASE_APP_ID,
    VUE_APP_FIREBASE_MEASUREMENT_ID: config.VUE_APP_FIREBASE_MEASUREMENT_ID
  }
}
