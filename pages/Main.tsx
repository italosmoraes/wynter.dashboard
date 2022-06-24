import useAuth from '../providers/AuthProvider'

function Main() {
  const { login, username } = useAuth()

  // login or signup
  console.log('MyApp???', login, username)

  return <p>my app</p>

  // if logged in, show product list
}

export default Main
