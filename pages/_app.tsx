import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import Modal from "@/components/Modal";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Modal isOpen/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
    
  )
}
