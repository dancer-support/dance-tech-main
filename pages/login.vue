<template>
  <v-form>
    <v-container>
      <v-text-field v-model="email" label="MailAddress" type="email" />
      <v-text-field v-model="password" label="Password" type="password" />
      <v-btn color="primary" @click="createUser">
        Register
      </v-btn>
      <v-btn color="primary" @click="logInUser">
        ログイン
      </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async createUser () {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async logInUser () {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout () {
      try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
