import Main from './Main'
import NextjsWrapper from './_app'

export default function Home() {
  return <NextjsWrapper Component={Main} pageProps={{}} />
}

// const googleAuth = `
// <script src="https://www.gstatic.com/firebasejs/8.0/firebase.js"></script>
// <script>
//   var config = {
//     apiKey: "AIzaSyDMEfTUjYjcP-_z1SM3Euo6GGTdnHRwM9c",
//     authDomain: "wynter-dashboard.firebaseapp.com",
//   };
//   firebase.initializeApp(config);
// </script>
// `
