/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../styles/globals.css';
import {Layout} from '@components/common'


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
