import Head from 'next/head'
import React from 'react'
import {HeadProps} from './types/others'


const HeadComponent:React.FC<HeadProps>=(props)=>{
    return (
        <Head>
        <title>{props.title}</title>
        <meta name="invoicing" content="invoicing app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    )
}

export default HeadComponent

