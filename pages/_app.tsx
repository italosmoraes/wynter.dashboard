import useAuth, { AuthProvider } from '../providers/AuthProvider'
import { useEffect } from 'react'
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
