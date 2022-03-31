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
        }
      ],
      title: 'ダンサーサポート',
      loginState: !!this.$fire.auth.currentUser
    }
  }
}
</script>
