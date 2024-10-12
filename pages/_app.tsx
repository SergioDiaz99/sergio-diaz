import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import WhatsAppButton from "../components/Whatsapp/Whatsapp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sergio Diaz</title>
        <meta name="description" content="sergio diaz - software developer" />
        <meta name="og:description" content="sergio diaz - software developer" />
        <meta name="og:image" content="sergio diaz - software developer" />
        <link rel="icon" href="/assets/sd.jpg" />
      </Head>
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
