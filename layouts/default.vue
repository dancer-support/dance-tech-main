<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <client-only>
          <v-list-item v-if="loginState" @click="logout">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-title>ログアウト</v-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="!loginState" to="/login">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-title>ログイン</v-title>
            </v-list-item-content>
          </v-list-item>
        </client-only>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
