import GlobalStyle from "@/styles";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation/index";
import { atom } from "jotai";

export const entries = atom([]);

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
