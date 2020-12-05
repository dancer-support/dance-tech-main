export default function ({ store, redirect }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/login')
  // } else {
    // return redirect('/')
  }
}
