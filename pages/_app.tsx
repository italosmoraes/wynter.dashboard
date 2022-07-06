import { AuthProvider } from '../providers/AuthProvider'
import '../styles/globals.css'

function NextjsWrapper({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )

  // if logged in, show product list
}

export default NextjsWrapper
