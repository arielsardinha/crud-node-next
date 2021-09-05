import '../styles/globals.css'
import Head from 'next/head'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title && pageProps.title}</title>
      </Head>
      <AuthProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </AuthProvider>
    </>
  )


}

export default MyApp
