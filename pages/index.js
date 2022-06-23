import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from './_app'

function Page() {
  return <p>FFS</p>
}

export default function Home() {
  return App({ Component: Page })
}
