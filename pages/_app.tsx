import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'
import Layout from '../components/Layout'


const myTheme = {
  tabs: {
    extended: `color: 'green'`
  }
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Grommet>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    </div>
  )
}

export default MyApp
