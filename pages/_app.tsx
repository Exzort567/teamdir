import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Toaster/>
    <EditModal />
    <RegisterModal/>
    <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    
    
  )
}
