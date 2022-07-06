import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { initializeApp, getApps, getApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  getAuth,
  initializeAuth,
  browserSessionPersistence,
  browserPopupRedirectResolver
} from 'firebase/auth'

const googleAuthProvider = new GoogleAuthProvider()

const googleAuthConfig = {
  apiKey: 'AIzaSyDMEfTUjYjcP-_z1SM3Euo6GGTdnHRwM9c',
  authDomain: 'http://localhost:3000'
}

const firebaseApp = !getApps().length ? initializeApp(googleAuthConfig) : getApp() // this check prevents error on hot reloading

export interface AuthContextType {
  username?: string
  //   userId?: string
  //   token?: string
  //   isLoggedIn: boolean
  //   setAuthToken: (authToken: string) => void
  //   updateUsername: (name: any) => void
  // login: (email: string, password: string) => void;
  login: () => void
}

const AuthContext = React.createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const username = 'username!'

  let authInstance

  useEffect(() => {
    try {
      authInstance = getAuth(firebaseApp)
      // authInstance = initializeAuth(firebaseApp, {
      //   persistence: browserSessionPersistence,
      //   popupRedirectResolver: browserPopupRedirectResolver
      // })

      login()
    } catch (err) {
      console.log('--- Firebase init error: ', err)
    }
  }, [])

  const login = () => {
    // use google as auth provider
    signInWithPopup(authInstance, googleAuthProvider, browserPopupRedirectResolver)
      .then(function (result) {
        console.log('---- signed in user: ', result.user)
        console.log('--- credential', GoogleAuthProvider.credentialFromResult(result))

        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken
        // // The signed-in user info.
        // var user = result.user
        // ...
      })
      .catch(function (error) {
        console.log('---- google auth error: ', error)

        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  return <AuthContext.Provider value={{ login, username }}>{children}</AuthContext.Provider>
}

export default function useAuth() {
  return useContext(AuthContext)
}
