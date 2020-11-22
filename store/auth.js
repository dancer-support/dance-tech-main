import { auth } from '~/plugins/firebase'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  username: '',
  idToken: {}
})

export const getters = {
  isLoggedIn: state => state.status === 'loggedIn'
}

export const actions = {
  getUser ({ commit }, user) {
    commit('setUser', user)
  },
  logout ({ commit }) {
    auth.signOut().then(() => {
      commit('logout')
    })
  }
}

export const mutations = {
  async setUser (state, user) {
    state.status = 'loggedIn'
    state.username = user.displayName
    state.idToken = await user.getIdToken(true)
  },
  logout (state) {
    state.status = 'loggedOut'
    state.username = ''
  }
}
