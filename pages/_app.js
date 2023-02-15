import GlobalStyle from "@/styles";
import Head from "next/head";

import Navigation from "../components/Navigation/index";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
 
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
