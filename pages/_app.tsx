
import React from 'react'
import Head from 'next/head'
import Nprogress from 'nprogress'
import {AppWrapper} from '../context/context'
//import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'

Nprogress.configure({ showSpinner: false });
function MyApp({ Component, pageProps }: AppProps) {


    const [loading, setLoading] = React.useState(false);
//starting loader
  Router.events.on("routeChangeStart", () => {
    Nprogress.start()
    setLoading(true);
    
  });
  //ending loader
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    Nprogress.done()
   
  });
  //in case of an error
  Router.events.on("routeChangeError", () => {
    setLoading(false);
  
  });
  return(
        <>
          <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {loading && <h1 className=''>Loading</h1>}
      {!loading &&
        <AppWrapper>
           <Component {...pageProps} />
        </AppWrapper> 
}
       </>
    
  ) 
}

export default MyApp
