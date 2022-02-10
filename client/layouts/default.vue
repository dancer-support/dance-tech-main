<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'トップ',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ブログ',
          to: '/blogs'
        },
        {
          icon: 'mdi-account',
          title: 'Performance',
          to: '/performance'
        }
      ],
      title: 'ダンサーサポート',
      loginState: !!this.$fire.auth.currentUser
    }
  },
  methods: {
    async logout () {
      try {
        await this.$fire.auth.signOut()
        this.loginState = false
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
