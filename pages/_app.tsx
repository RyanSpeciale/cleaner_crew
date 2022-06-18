import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet'
import Layout from '../components/Layout'


const myTheme = {
  tab: {
    color: 'black',
    border: {
      side: 'bottom',
      color: 'green'
    },
    active: {
      color: 'green'
    }
  }
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Grommet theme={myTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Grommet>
    </div>
  )
}

export default MyApp
