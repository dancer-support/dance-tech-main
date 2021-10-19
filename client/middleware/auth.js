export default function ({ store, redirect, route }) {
  const isLoggedIn = store.getters.isLoggedIn
  const path = route.path
  if (!isLoggedIn && path !== '/login') {
    return redirect('/login')
  } else if (isLoggedIn && path === '/login') {
    return redirect('/')
  }
}
