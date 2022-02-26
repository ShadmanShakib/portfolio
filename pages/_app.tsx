import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
