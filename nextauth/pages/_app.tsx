import { AppProps } from 'next/app'
import { AuthContext, AuthProvider } from '../contexts/AuthContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp