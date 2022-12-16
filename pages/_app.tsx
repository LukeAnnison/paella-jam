import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { VideoProvider } from "../contexts/video";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VideoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VideoProvider>
  );
}
