import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation/nav.index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
