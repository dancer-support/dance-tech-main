<template>
  <v-form>
    <v-container>
      <v-main v-if="loginState">
        <v-btn color="secondary" to="/blogs">
          ダッシュボードへ
        </v-btn>
      </v-main>
      <v-main v-if="!loginState">
        <v-text-field v-model="email" label="メールアドレス" type="email" />
        <v-text-field v-model="password" label="パスワード" type="password" />
        <v-btn color="secondary" :loading="loading" :disabled="loading" @click="createUser">
          新規登録
        </v-btn>
        <v-btn color="primary" :loading="loading" :disabled="loading" @click="logInUser">
          ログイン
        </v-btn>
      </v-main>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      loginState: !!this.$fire.auth.currentUser,
      loading: false
    }
  },
  middleware: 'auth',
  scrollToTop: true,
  methods: {
    async createUser () {
      try {
        this.loading = true

        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )

        this.loginState = true
      } catch (e) {
        alert(e)
      } finally {
        this.loading = false
      }
    },
    async logInUser () {
      try {
        this.loading = true

        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )

        this.loginState = true
      } catch (e) {
        alert(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
