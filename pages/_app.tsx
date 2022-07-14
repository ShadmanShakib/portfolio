import "../styles/globals.css";
import { MainProvider } from "context";
import { FC, useEffect } from "react";
import type { AppProps } from "next/app";
const Noop: FC = ({ children }: any) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <MainProvider>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </MainProvider>
  );
}
